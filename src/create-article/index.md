A escrita de código limpo e sustentável é um desafio constante para quem trabalha com desenvolvimento de software. À medida que sistemas crescem, aumentam também a complexidade e a necessidade de manutenibilidade. Nesse cenário, os princípios **SOLID** surgem como uma bússola para orientar decisões arquitetônicas e promover a criação de softwares mais robustos, legíveis e fáceis de evoluir.

Mas o que de fato são esses princípios? De onde vieram? E por que tantos desenvolvedores os consideram fundamentais? Vamos explorar em detalhes cada um dos cinco pilares do SOLID, com exemplos práticos, interpretações reais e armadilhas comuns.

---

## O que é SOLID?

**SOLID** é um acrônimo para cinco princípios da programação orientada a objetos. Foi popularizado por **Robert C. Martin (Uncle Bob)** e serve como base para um design de software mais limpo, modular e escalável. Esses princípios são:

- **S** – *Single Responsibility Principle* (Princípio da Responsabilidade Única)  
- **O** – *Open/Closed Principle* (Princípio Aberto/Fechado)  
- **L** – *Liskov Substitution Principle* (Princípio da Substituição de Liskov)  
- **I** – *Interface Segregation Principle* (Princípio da Segregação de Interface)  
- **D** – *Dependency Inversion Principle* (Princípio da Inversão de Dependência)

Vamos destrinchar cada um.

---

## 1. Single Responsibility Principle (SRP) – Princípio da Responsabilidade Única

**"Uma classe deve ter apenas uma razão para mudar."**

Esse princípio prega que uma classe deve ter **apenas uma responsabilidade bem definida**. Ou seja, ela deve ser coesa e especializada em uma única tarefa. Isso torna o código mais fácil de manter e testar.

### Exemplo ruim:

```typescript
class Report {
  generatePDF() {
    // gera o PDF
  }

  saveToDatabase() {
    // salva no banco
  }

  sendEmail() {
    // envia por email
  }
}
```

Essa classe viola o SRP porque está fazendo três coisas diferentes: gerar, salvar e enviar. Cada uma tem uma razão distinta para mudar.

### Refatorando com SRP:

```typescript
class ReportGenerator {
  generatePDF() {
    // gera o PDF
  }
}

class ReportRepository {
  save(report: Report) {
    // salva no banco
  }
}

class EmailService {
  send(report: Report) {
    // envia por email
  }
}
```

Cada classe agora tem uma única responsabilidade. Isso facilita o reuso e reduz o acoplamento.

---

## 2. Open/Closed Principle (OCP) – Princípio Aberto/Fechado

**"Entidades de software devem estar abertas para extensão, mas fechadas para modificação."**

Ou seja, você deve poder **adicionar novos comportamentos sem alterar o código existente**, reduzindo riscos de regressões.

### Exemplo ruim:

```typescript
class Discount {
  calculate(customerType: string): number {
    if (customerType === 'premium') {
      return 0.2;
    } else if (customerType === 'regular') {
      return 0.1;
    }
    return 0;
  }
}
```

Cada novo tipo de cliente exige modificar essa classe, quebrando o OCP.

### Refatorando com OCP:

```typescript
interface DiscountStrategy {
  getDiscount(): number;
}

class PremiumCustomer implements DiscountStrategy {
  getDiscount() {
    return 0.2;
  }
}

class RegularCustomer implements DiscountStrategy {
  getDiscount() {
    return 0.1;
  }
}

class DiscountService {
  constructor(private strategy: DiscountStrategy) {}

  calculate() {
    return this.strategy.getDiscount();
  }
}
```

Agora, podemos adicionar novos tipos de clientes apenas criando novas classes, sem modificar o código existente.

---

## 3. Liskov Substitution Principle (LSP) – Princípio da Substituição de Liskov

**"Se S é um subtipo de T, então objetos do tipo T devem poder ser substituídos por objetos do tipo S sem quebrar o programa."**

Esse princípio exige que classes filhas possam ser usadas no lugar das classes pai **sem alterar o comportamento esperado**.

### Exemplo problemático:

```typescript
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly");
  }
}
```

Aqui, uma avestruz é um "pássaro" na herança, mas não pode voar. Usá-la como um `Bird` quebra a lógica esperada.

### Solução com LSP:

```typescript
interface Bird {}

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich implements Bird {
  // não implementa fly
}
```

A herança foi substituída por interfaces mais específicas. Agora, só quem realmente voa implementa `fly`.

---

## 4. Interface Segregation Principle (ISP) – Princípio da Segregação de Interface

**"Nenhum cliente deve ser forçado a depender de métodos que não utiliza."**

Esse princípio nos alerta contra interfaces grandes e genéricas. Interfaces devem ser **pequenas e específicas para os clientes** que as consomem.

### Exemplo ruim:

```typescript
interface Machine {
  print(): void;
  scan(): void;
  fax(): void;
}

class OldPrinter implements Machine {
  print() {
    console.log("Printing");
  }

  scan() {
    throw new Error("Not supported");
  }

  fax() {
    throw new Error("Not supported");
  }
}
```

A `OldPrinter` é forçada a implementar métodos que não fazem sentido.

### Refatorando com ISP:

```typescript
interface Printer {
  print(): void;
}

class SimplePrinter implements Printer {
  print() {
    console.log("Printing");
  }
}
```

Interfaces mais enxutas evitam implementações desnecessárias.

---

## 5. Dependency Inversion Principle (DIP) – Princípio da Inversão de Dependência

**"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações."**

Em outras palavras, devemos **depender de interfaces e abstrações, não de implementações concretas**.

### Exemplo ruim:

```typescript
class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  private db = new MySQLDatabase();

  registerUser() {
    this.db.connect();
    // lógica de cadastro
  }
}
```

`UserService` depende diretamente de uma implementação específica.

### Refatorando com DIP:

```typescript
interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  constructor(private db: Database) {}

  registerUser() {
    this.db.connect();
    // lógica de cadastro
  }
}
```

Agora o `UserService` pode usar qualquer banco que implemente a interface `Database`, como MongoDB ou SQLite.

---

## Conclusão

Os princípios SOLID não são apenas boas práticas teóricas — eles têm impacto direto na qualidade do seu código. Segui-los reduz acoplamento, melhora a testabilidade, facilita a manutenção e prepara o terreno para sistemas mais resilientes e evolutivos.

É claro que aplicar todos os princípios o tempo todo pode gerar complexidade desnecessária, especialmente em projetos pequenos. Mas compreender e saber quando aplicar cada um deles é um diferencial enorme para qualquer desenvolvedor sério.

Lembre-se: SOLID não é uma regra rígida, mas um conjunto de diretrizes que nos ajudam a tomar **melhores decisões de design**.
