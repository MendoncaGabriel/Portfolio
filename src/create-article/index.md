Se você está em busca de uma alternativa leve, rápida e moderna ao Express, o **Fastify** merece sua atenção. E se você é fã de **TypeScript**, aí é que a combinação fica ainda mais interessante.

Neste artigo, vamos explorar como usar Fastify com TypeScript de forma eficiente, destacando os benefícios reais que essa stack oferece para quem está construindo APIs escaláveis e bem tipadas.

---

## Por que Fastify?

O Express é ótimo, mas vamos ser sinceros: ele já está um pouco cansado. Claro, funciona, tem uma comunidade enorme e resolve 90% dos casos. Mas quando o foco é **performance**, **escalabilidade** e **developer experience**, o Fastify brilha.

O Fastify é um framework web focado em performance. Ele é construído sobre Node.js com uma arquitetura orientada a plugins, suporte nativo a JSON Schema e uma API inspirada no Express (mas muito mais moderna).

Alguns motivos para considerar o Fastify:

- ⚡ **Performance absurda**: benchmarks mostram o Fastify sendo até 2x mais rápido que o Express.
- 📦 **Sistema de plugins** muito bem pensado, facilitando a organização do projeto.
- 📊 **Validação de schemas** embutida, com suporte a JSON Schema (sem precisar de middleware extra).
- 🔌 **Suporte a hooks**, decorators e outras features que ajudam no controle fino da aplicação.

---

## E onde entra o TypeScript?

A tipagem do TypeScript encaixa perfeitamente com o Fastify. Ao contrário de muitos frameworks que têm uma tipagem "mais ou menos", o Fastify **abraça o TypeScript de verdade**.

Você pode tipar:

- O corpo da requisição
- Os parâmetros da rota
- Os headers
- As queries
- E até as respostas

Isso significa **autocompletar real**, com tipagem precisa no seu editor — menos erro em produção, mais confiança durante o desenvolvimento.

---

## Setup básico: Fastify com TypeScript

Vamos ver como começar um projeto Fastify com TypeScript do zero:

### 1. Inicializando o projeto

```bash
npm init -y
npm install fastify
npm install -D typescript ts-node @types/node
```

Crie um `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

### 2. Criando o servidor Fastify

```ts
// src/server.ts
import Fastify from 'fastify';

const app = Fastify();

app.get('/ping', async (request, reply) => {
  return { pong: 'it works!' };
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running at ${address}`);
});
```

Rode com:

```bash
npx ts-node src/server.ts
```

---

## Tipando as rotas com Request e Reply

Um dos grandes diferenciais é poder tipar as rotas com precisão. Olha esse exemplo:

```ts
import { FastifyRequest, FastifyReply } from 'fastify';

interface HelloParams {
  name: string;
}

app.get<{
  Params: HelloParams;
}>('/hello/:name', async (request: FastifyRequest<{ Params: HelloParams }>, reply: FastifyReply) => {
  return { message: `Hello, ${request.params.name}` };
});
```

Com isso, o TypeScript já entende que `request.params.name` é uma `string` — sem precisar de `as string` ou `any`.

---

## Validação com Schema (e inferência de tipos!)

Um recurso de ouro no Fastify é o uso de **schemas JSON** para validação das requisições. E o mais legal? Dá pra gerar os **tipos automaticamente** com TypeScript!

```ts
const helloSchema = {
  params: {
    type: 'object',
    properties: {
      name: { type: 'string' }
    },
    required: ['name']
  }
} as const;

app.get('/hello/:name', {
  schema: helloSchema,
  handler: async (request, reply) => {
    return { message: `Hello, ${request.params.name}` };
  }
});
```

Se quiser usar Zod, Ajv, ou outras libs — também é possível com plugins.

---

## Organização por módulos com plugins

Outro ponto positivo é a arquitetura baseada em **plugins**. Cada rota ou grupo de rotas pode ser isolado em um módulo:

```ts
// routes/user.ts
import { FastifyInstance } from 'fastify';

export async function userRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    return [{ id: 1, name: 'Alice' }];
  });
}
```

E no `server.ts`:

```ts
import { userRoutes } from './routes/user';

app.register(userRoutes);
```

Simples, limpo e escalável.

---

## Conclusão: vale a pena usar Fastify com TypeScript?

Sim. Se você está construindo APIs modernas e quer extrair o máximo de performance, confiabilidade e produtividade, o combo Fastify + TypeScript é uma escolha excelente.

Você ganha:

- Tipagem forte de ponta a ponta
- Validação integrada
- Código limpo e escalável
- Melhor performance que o Express
- E uma curva de aprendizado super tranquila

Se ainda está no Express, experimenta migrar um projeto pequeno. A chance de você se apaixonar é grande.

---

## Palavras-chave para SEO:

**Fastify com TypeScript**, **framework Node.js moderno**, **API com TypeScript**, **Fastify vs Express**, **como usar Fastify**, **backend performático com TypeScript**, **validação no Fastify**, **roteamento tipado com TypeScript**, **Fastify JSON Schema**, **plugin system no Fastify**
