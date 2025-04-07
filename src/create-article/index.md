O **Repository Pattern** é um daqueles padrões de projeto que, quando bem aplicados, elevam a arquitetura de uma aplicação. Embora seja bastante comum em projetos Java e .NET, ele também se encaixa perfeitamente em aplicações modernas escritas em **TypeScript**, especialmente quando falamos de **APIs com responsabilidade bem definida**.

Neste artigo, vamos explorar o que é o Repository Pattern, por que você deveria usá-lo, e como implementá-lo de maneira clara e prática com TypeScript — sem mágica, sem abstração desnecessária, apenas um código limpo, reutilizável e fácil de testar.

---

## 📦 O que é o Repository Pattern?

O Repository Pattern atua como uma **camada de abstração entre a lógica de negócios e a camada de acesso a dados**. Em vez de o seu serviço ou controlador conversar diretamente com o banco de dados (ou ORM), essa responsabilidade fica encapsulada dentro de um repositório.

A ideia é clara: **desacoplar** sua aplicação da tecnologia usada para persistência (como Prisma, TypeORM, Sequelize, MongoDB, etc) e, ao mesmo tempo, tornar os testes mais simples e o código mais organizado.

---

## 🎯 Por que usar Repository Pattern?

Aqui estão alguns motivos sólidos:

- **Organização**: separa a lógica de acesso a dados da lógica de negócios.
- **Reutilização**: os métodos do repositório podem ser usados por múltiplas partes do sistema.
- **Testabilidade**: facilita a criação de *mocks* para testes unitários.
- **Flexibilidade**: trocar o ORM, o banco de dados ou até ir para uma API externa se torna mais fácil.
- **Leitura e manutenção**: o código fica mais limpo e com responsabilidades claras.

---

## 🧱 Estrutura básica de um Repository em TypeScript

Vamos implementar um repositório simples para a entidade `User`. Suponha que estamos usando o Prisma como ORM, mas o foco é que o serviço nem saiba disso.

### 1. Definindo a entidade

```ts
// src/entities/User.ts
export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}
```

### 2. Definindo o contrato do repositório

```ts
// src/repositories/UserRepository.ts
import { User } from '@/entities/User'

export interface UserRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(user: Omit<User, 'id' | 'createdAt'>): Promise<User>
}
```

Essa interface define o contrato que qualquer implementação de repositório de usuários deve seguir.

### 3. Implementando com Prisma

```ts
// src/repositories/prisma/PrismaUserRepository.ts
import { prisma } from '@/lib/prisma'
import { UserRepository } from '../UserRepository'
import { User } from '@/entities/User'

export class PrismaUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } })
  }

  async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    return prisma.user.create({
      data,
    })
  }
}
```

A camada de serviço nem precisa saber que Prisma está sendo usado. Ela apenas interage com a interface.

---

## 💡 Aplicando no serviço

```ts
// src/services/CreateUserService.ts
import { UserRepository } from '@/repositories/UserRepository'
import { User } from '@/entities/User'

interface CreateUserDTO {
  name: string
  email: string
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email)

    if (existingUser) {
      throw new Error('User already exists.')
    }

    return this.userRepository.create(data)
  }
}
```

Agora temos um serviço que pode ser facilmente testado com um *mock* do `UserRepository`, sem precisar de banco ou ORM.

---

## 🧪 E nos testes?

```ts
// src/repositories/in-memory/InMemoryUserRepository.ts
import { UserRepository } from '../UserRepository'
import { User } from '@/entities/User'
import { randomUUID } from 'crypto'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const user: User = {
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
    }
    this.users.push(user)
    return user
  }
}
```

No teste, basta injetar esse repositório fake no serviço:

```ts
// tests/CreateUserService.spec.ts
import { InMemoryUserRepository } from '@/repositories/in-memory/InMemoryUserRepository'
import { CreateUserService } from '@/services/CreateUserService'

test('deve criar um novo usuário', async () => {
  const repo = new InMemoryUserRepository()
  const service = new CreateUserService(repo)

  const user = await service.execute({
    name: 'Alice',
    email: 'alice@example.com',
  })

  expect(user).toHaveProperty('id')
  expect(user.email).toBe('alice@example.com')
})
```

---

## 📌 Considerações finais

O Repository Pattern é uma abordagem poderosa e elegante que se encaixa muito bem com o ecossistema TypeScript, especialmente em projetos backend com Node.js. Ele ajuda a manter o código limpo, testável e preparado para crescer.

Se você está construindo APIs com NestJS, Fastify, Express, ou mesmo Next.js com camada backend, considere seriamente adotar esse padrão. Ele pode parecer um pouco “cerimonial” no início, mas os benefícios em médio e longo prazo compensam — e muito.

---

## 🧭 Próximos passos

- Implemente repositórios genéricos (base repository).
- Aplique o padrão em projetos com múltiplos bancos (ex: Mongo e Postgres).
- Combine com outros padrões, como Factory e Service.

Se quiser, posso te ajudar a criar uma estrutura de projeto completa usando Repository Pattern com Fastify ou outro framework à sua escolha.
