**Testes Unitários e de Integração no Backend com Vitest e Supertest**

No desenvolvimento de aplicações robustas, garantir que cada parte do código funcione corretamente é essencial. Testes são fundamentais para assegurar que o comportamento da aplicação seja consistente e livre de erros. Neste artigo, vamos explorar como implementar testes unitários e de integração no backend utilizando duas ferramentas poderosas: **Vitest** e **Supertest**. Essas ferramentas são ideais para garantir a qualidade e a confiabilidade do seu código, proporcionando uma experiência de desenvolvimento mais fluida e segura.

### O que são Testes Unitários e Testes de Integração?

Antes de mergulharmos nas ferramentas, é importante entender os tipos de testes que estamos discutindo:

- **Testes Unitários**: O objetivo dos testes unitários é verificar o funcionamento de unidades específicas do código, como funções ou métodos. Esses testes isolam a lógica, garantindo que uma determinada unidade funcione como esperado, sem depender de outras partes do sistema. Eles são rápidos e focam na precisão de pequenas partes da aplicação.

- **Testes de Integração**: Ao contrário dos testes unitários, os testes de integração verificam a interação entre diferentes partes do sistema. Eles garantem que módulos e componentes do sistema funcionem corretamente juntos. Esses testes são mais complexos, pois envolvem dependências externas, como bancos de dados ou APIs.

Agora, vamos explorar como podemos usar **Vitest** e **Supertest** para realizar esses testes no backend.

### O que é o Vitest?

**Vitest** é uma ferramenta de testes de JavaScript/TypeScript focada em desempenho e simplicidade. Ele oferece uma experiência similar ao Jest, mas com a vantagem de ser mais rápido e com menor consumo de memória. Com suporte nativo para TypeScript, Vitest permite que você escreva testes de forma simples e direta, utilizando uma sintaxe familiar para quem já está acostumado com frameworks como o Jest.

#### Configuração Básica do Vitest

Primeiramente, você precisa instalar o **Vitest** no seu projeto. Para isso, execute o seguinte comando:

```bash
npm install --save-dev vitest
```

Em seguida, crie ou edite o arquivo `vitest.config.ts` na raiz do projeto, caso seja necessário. Para a maioria dos casos, a configuração padrão já é suficiente.

Agora, vamos criar um simples teste unitário. Suponha que você tenha a seguinte função no seu backend:

```ts
function soma(a: number, b: number): number {
  return a + b;
}
```

O teste para essa função ficaria assim:

```ts
import { describe, it, expect } from 'vitest';
import { soma } from './soma';

describe('Função soma', () => {
  it('deve somar dois números corretamente', () => {
    expect(soma(2, 3)).toBe(5);
  });
});
```

Este é um teste simples que verifica se a função `soma` está retornando o resultado esperado. Com o Vitest, o processo é direto e eficiente, permitindo que você escreva testes de unidade rapidamente.

### O que é o Supertest?

**Supertest** é uma biblioteca que facilita a realização de testes de integração em APIs HTTP. Ela permite que você simule requisições HTTP, como `GET`, `POST`, `PUT` e `DELETE`, e verifique se as respostas da API estão corretas. Com o Supertest, você pode testar endpoints RESTful de forma simples e eficaz, garantindo que sua API esteja funcionando corretamente.

#### Configuração do Supertest

Para utilizar o Supertest, você precisa instalá-lo:

```bash
npm install --save-dev supertest
```

Com o Supertest instalado, você pode testar os endpoints da sua API. Vamos supor que você tenha um endpoint `/api/usuario` que retorna os dados de um usuário. A seguir, um exemplo de teste de integração utilizando o Supertest:

```ts
import request from 'supertest';
import app from './app'; // Supondo que 'app' seja a instância do seu servidor

describe('GET /api/usuario', () => {
  it('deve retornar um status 200 e os dados do usuário', async () => {
    const response = await request(app).get('/api/usuario/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome');
  });
});
```

Neste exemplo, estamos simulando uma requisição `GET` para o endpoint `/api/usuario/1`. O teste verifica se o status da resposta é 200 e se o corpo da resposta contém os dados esperados.

### Testes Unitários e de Integração Juntos

A combinação de **Vitest** e **Supertest** oferece uma solução completa para testes no backend. Enquanto o Vitest é ideal para testar unidades isoladas de código, como funções e métodos, o Supertest brilha quando o objetivo é testar a interação entre o servidor e a API, simulando requisições HTTP reais.

A prática comum em uma aplicação é escrever testes unitários para as funções de negócio e lógica, enquanto os testes de integração são usados para garantir que as rotas e endpoints da API respondam corretamente a diferentes cenários de requisição.

### Exemplo Completo de Teste

Vamos combinar ambos os tipos de teste em um único fluxo. Suponha que você tenha uma função que soma dois números e, ao ser chamada por um endpoint, retorna o resultado dessa soma. O código da função seria:

```ts
function soma(a: number, b: number): number {
  return a + b;
}

export function calcularSoma(req: Request, res: Response) {
  const { a, b } = req.query;
  if (typeof a === 'string' && typeof b === 'string') {
    return res.status(400).send('Os parâmetros devem ser números');
  }
  return res.json({ resultado: soma(Number(a), Number(b)) });
}
```

Agora, escrevemos os testes. O teste unitário para a função `soma` seria:

```ts
import { describe, it, expect } from 'vitest';
import { soma } from './soma';

describe('Função soma', () => {
  it('deve somar dois números corretamente', () => {
    expect(soma(5, 3)).toBe(8);
  });
});
```

E o teste de integração para o endpoint seria:

```ts
import request from 'supertest';
import app from './app'; // Supondo que 'app' seja a instância do seu servidor

describe('GET /api/soma', () => {
  it('deve retornar o resultado da soma', async () => {
    const response = await request(app).get('/api/soma?a=5&b=3');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('resultado', 8);
  });

  it('deve retornar 400 se os parâmetros não forem números', async () => {
    const response = await request(app).get('/api/soma?a=abc&b=3');

    expect(response.status).toBe(400);
    expect(response.text).toBe('Os parâmetros devem ser números');
  });
});
```

### Conclusão

A combinação de **Vitest** para testes unitários e **Supertest** para testes de integração é uma solução poderosa para garantir a qualidade do seu backend. Com esses dois frameworks, você pode escrever testes de maneira simples e eficiente, tanto para unidades isoladas quanto para a interação completa da API. Isso melhora a confiabilidade do seu código e reduz a chance de erros, garantindo que sua aplicação funcione corretamente em produção.

Investir em uma boa cobertura de testes pode ser desafiador no início, mas é um passo crucial para o sucesso de qualquer projeto a longo prazo. Com ferramentas como **Vitest** e **Supertest**, você tem o suporte necessário para criar aplicações mais robustas e seguras.