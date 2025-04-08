Você já se pegou esperando aquela requisição demorada pra carregar? Talvez fosse uma consulta pesada no banco, um processamento chato no backend ou até uma API externa lenta. Agora imagina isso acontecendo em produção, com centenas de usuários ao mesmo tempo. Nada legal, né?

É aí que entra o *cache*, e mais especificamente, o **Redis**. Mas antes de sair jogando `set` e `get` no código, vale entender direitinho o que é, por que usar e quando *não* usar cache. Bora nessa.

---

## O que é Redis?

Redis (Remote Dictionary Server) é um banco de dados **in-memory**, de chave-valor, extremamente rápido. Ele não foi feito pra guardar dados permanentemente (embora possa), mas sim pra entregar **respostas imediatas** a dados que você acessa com frequência.

Pensa assim: banco de dados tradicional = HD. Redis = memória RAM. A diferença de velocidade é absurda.

---

## Onde o Redis brilha

### 1. **Evitar consultas repetidas no banco**

Imagina uma API de produtos. O cliente clica num produto e você vai lá no banco pegar os detalhes. Agora imagina isso se repetindo 5 mil vezes por minuto. Se esses dados mudam pouco, você tá gastando recurso à toa.

Com Redis, você pode:

```ts
const cacheKey = `product:${productId}`
const cached = await redis.get(cacheKey)

if (cached) {
  return JSON.parse(cached)
}

const product = await db.products.find(productId)
await redis.set(cacheKey, JSON.stringify(product), 'EX', 60 * 10) // 10 minutos de cache

return product
```

Resultado? Banco aliviado, resposta mais rápida, e o usuário nem imagina o que rolou nos bastidores.

---

### 2. **Gerenciar sessões**

Em apps com autenticação, armazenar sessões no Redis é super comum. Isso permite escalar horizontalmente (ou seja, rodar múltiplas instâncias do backend) sem perder o estado do usuário.

Frameworks como Express, Nest.js ou Fastify têm suporte fácil pra isso.

---

### 3. **Filas de mensagens e jobs**

Redis também é usado como broker de mensagens com libs como **BullMQ**, ótimo pra gerenciar filas de tarefas assíncronas. Exemplo clássico: envio de e-mails, processamento de imagens, etc.

Você empilha os jobs e eles são processados em segundo plano. Redis garante que nada vai se perder (dependendo da configuração).

---

## Cuidados e armadilhas

Nem tudo são flores, claro. Algumas coisas que você precisa levar em conta:

- **Consistência**: Se o dado no banco muda, e o cache não, o usuário pode ver algo desatualizado.
- **Invalidação de cache**: Saber *quando* limpar o cache é tão importante quanto saber *como* armazenar.
- **Memória limitada**: Redis vive na RAM. Se você guardar tudo lá, uma hora a memória acaba (e aí ele começa a apagar chaves antigas).
- **TTL (Time To Live)**: Sempre use um tempo de expiração, a não ser que você esteja *muito* certo de que o dado pode ficar lá pra sempre.

---

## Estratégias populares

### 1. **Cache-aside**

Essa é a estratégia mais comum: o app busca o dado no cache; se não encontrar, vai pro banco, salva no cache e retorna.

É fácil de implementar e funciona bem pra maioria dos casos.

### 2. **Write-through**

Nesse modelo, quando você grava no banco, grava no cache também. Mantém os dois em sincronia automaticamente. Mais complexo, mas ajuda com consistência.

### 3. **Pub/Sub**

Redis tem suporte nativo a *publicação e inscrição*, útil pra sistemas distribuídos. Ex: um serviço atualiza o dado e envia uma notificação pra outros limparem seus caches.

---

## Vale a pena usar Redis?

Sim, mas com propósito. Redis não é uma solução mágica. Ele acelera seu sistema, mas você precisa saber o que tá fazendo. Colocar cache onde não precisa pode até piorar a performance.

Use Redis quando:

- Você tem consultas muito repetitivas.
- Os dados não mudam com frequência.
- Você quer aliviar carga do banco.
- Precisa de um mecanismo rápido pra sessões, filas ou contadores.

---

## Conclusão

Redis é uma das ferramentas mais poderosas que você pode ter na sua stack. Ele resolve problemas reais de performance, estabilidade e escalabilidade – mas só quando usado com consciência.

Aprender a usar cache bem é quase como aprender a respirar no desenvolvimento de sistemas modernos. Não é opcional.

Se você ainda não testou Redis no seu projeto, tenta aplicar ele em uma rota crítica. Analisa os ganhos. Entende o impacto. A diferença pode ser muito maior do que você imagina.