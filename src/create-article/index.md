Prisma é um ORM (Object-Relational Mapping) moderno para Node.js e TypeScript que oferece uma maneira segura, intuitiva e eficiente de interagir com bancos de dados relacionais. Com uma abordagem baseada em **tipagem estática**, **autocompletar inteligente** e **migrações controladas por código**, o Prisma tem se destacado como uma das melhores ferramentas para quem busca produtividade e confiança no desenvolvimento de APIs e aplicações back-end.

## Por que usar o Prisma?

A proposta do Prisma é oferecer uma experiência de desenvolvimento superior ao lidar com bancos de dados, trazendo:

- 🔐 **Segurança de tipo**: você escreve menos testes e evita bugs antes mesmo de rodar a aplicação.
- ⚡ **Performance**: queries otimizadas e integração com cache, pooling e transactions.
- 🧠 **Developer Experience**: autocompletar avançado e validação em tempo de escrita no seu editor.
- ⏱️ **Agilidade**: migrações rápidas, simples e rastreáveis com histórico em código.

---

## Como o Prisma funciona?

O Prisma se divide em três componentes principais:

1. **Prisma Client** – O cliente gerado automaticamente a partir do seu schema, com tipagem estática.
2. **Prisma Migrate** – Ferramenta para gerenciar e aplicar migrações no banco de dados.
3. **Prisma Studio** – Interface visual para explorar e editar os dados do banco de forma segura.

---

## Instalando o Prisma

```bash
npm install prisma --save-dev
npx prisma init
```

Esse comando criará a estrutura base do Prisma no seu projeto:

```
📁 prisma/
  └── schema.prisma
📁 node_modules/
📄 package.json
```

---

## Estrutura do `schema.prisma`

O arquivo `schema.prisma` define o modelo de dados da sua aplicação:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id        Int      @id @default(autoincrement())
  nome      String
  email     String   @unique
  criadoEm  DateTime @default(now())
}
```

Esse modelo será usado para gerar o **Prisma Client**, a ponte entre sua aplicação e o banco de dados.

---

## Gerando o Prisma Client

Após definir os modelos, você precisa gerar o client:

```bash
npx prisma generate
```

Para criar as tabelas com base no schema, use:

```bash
npx prisma migrate dev --name inicial
```

---

## Usando o Prisma Client

Com o client gerado, você pode começar a fazer queries com total segurança de tipos:

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const novoUsuario = await prisma.usuario.create({
  data: {
    nome: 'Gabriel Andrade',
    email: 'gabriel@email.com',
  },
})

const usuarios = await prisma.usuario.findMany()
```

---

## Exemplos de Queries Comuns

### Buscar por ID

```ts
const usuario = await prisma.usuario.findUnique({
  where: { id: 1 }
})
```

### Atualizar usuário

```ts
await prisma.usuario.update({
  where: { id: 1 },
  data: { nome: 'Gabriel M.' }
})
```

### Deletar usuário

```ts
await prisma.usuario.delete({
  where: { id: 1 }
})
```

---

## Migrações com Prisma Migrate

Cada mudança nos seus modelos requer uma nova migração. Exemplo:

```bash
npx prisma migrate dev --name adiciona-endereco
```

O Prisma irá:

1. Criar um novo arquivo de migração com SQL.
2. Aplicar as alterações no banco de dados.
3. Atualizar o Prisma Client automaticamente.

---

## Prisma Studio: Visualização de Dados

Execute:

```bash
npx prisma studio
```

Você verá uma interface web onde pode visualizar, editar e deletar registros no banco de dados com facilidade, ideal para debug ou gerenciamento de dados em ambientes de desenvolvimento.

---

## Integração com TypeScript

O Prisma aproveita o TypeScript ao máximo. O client gerado é totalmente tipado, o que evita erros comuns e acelera o desenvolvimento. Você pode até extrair os tipos para usar em validações, DTOs e camadas de serviço:

```ts
import type { Usuario } from '@prisma/client'
```

---

## Vantagens sobre ORMs tradicionais

| Prisma         | Sequelize/TypeORM        |
|----------------|--------------------------|
| Tipagem forte  | Tipagem fraca/dinâmica   |
| Queries seguras e previsíveis | Queries manuais com risco de erro |
| Migrations automatizadas por schema | Migrations manuais e verbosas |
| Client gerado com autocompletar | Sem geração de código |

---

## Quando **não** usar Prisma

Apesar de ser uma ferramenta poderosa, o Prisma não é ideal em alguns cenários:

- Ambientes com bancos de dados não relacionais (como MongoDB, que ainda está em preview).
- Aplicações extremamente dinâmicas que exigem construção de queries complexas em tempo de execução.
- Projetos legados com schemas complicados e mal definidos.

---

## Conclusão

O Prisma ORM é uma escolha moderna, produtiva e segura para quem desenvolve aplicações com Node.js e TypeScript. Ele reduz a complexidade do backend, acelera o desenvolvimento e diminui a margem de erro, principalmente em projetos de médio e grande porte.

Se você ainda está usando um ORM tradicional ou escrevendo SQL puro, vale a pena experimentar o Prisma e sentir na prática a diferença que ele pode fazer no seu fluxo de trabalho.

---

## Recursos oficiais

- [Documentação do Prisma](https://www.prisma.io/docs)
- [Playground interativo](https://www.prisma.io/playground)
- [Repositório no GitHub](https://github.com/prisma/prisma)

