Se você já se perguntou por que o `setTimeout` com zero milissegundos não executa imediatamente, ou por que seu `console.log` aparece antes de uma `Promise`, este artigo é pra você. A resposta está no coração da execução do JavaScript: o **Event Loop**.

## JavaScript é Single-Threaded, mas...

Antes de entrar no loop em si, vamos esclarecer uma coisa: **JavaScript é single-threaded**, ou seja, ele executa uma instrução por vez, numa única thread. Isso quer dizer que ele não faz várias coisas ao mesmo tempo... ou faz?

Na prática, parece que sim — e isso acontece graças a um mecanismo elegante por trás dos bastidores: o **event loop**, junto com a **call stack**, a **Web API** (em ambientes como browsers), e a **task queue** (ou fila de tarefas).

## O Que É o Event Loop?

O **event loop** é o orquestrador. Ele observa a **call stack** (a pilha de execução) e a **fila de tarefas**. Quando a pilha está vazia, ele pega a próxima tarefa da fila e a coloca na pilha para ser executada.

Parece simples, mas essa mecânica resolve um problema enorme: como fazer código assíncrono parecer síncrono.

Vamos ver um exemplo prático:

```javascript
console.log('Início');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Fim');
```

### Saída:
```
Início
Fim
Timeout
```

Você esperava que o "Timeout" viesse logo após o "Início"? É comum pensar assim, mas o que acontece aqui é que o `setTimeout` é enviado para a Web API. Após o tempo (mesmo que zero), ele é jogado para a **fila de tarefas**. O **event loop** só vai executá-lo **depois que a stack estiver vazia**, ou seja, depois do "Fim".

## Call Stack, Web APIs e Fila de Tarefas

Vamos dar nome aos bois:

- **Call Stack**: onde seu código é executado, função por função.
- **Web APIs**: funcionalidades assíncronas oferecidas pelo ambiente (como o browser ou Node.js), como `setTimeout`, `fetch`, `DOM events`.
- **Task Queue (ou Callback Queue)**: fila onde eventos assíncronos esperam sua vez.
- **Event Loop**: fica de olho. Se a stack estiver livre, ele envia a próxima tarefa da fila pra execução.

## E o Microtask Queue? Promises Entra em Cena

Além da fila de tarefas (macrotasks), existe uma outra fila menos falada, mas super importante: a **fila de microtarefas**. Promises vão pra lá.

```javascript
console.log('Início');

Promise.resolve().then(() => {
  console.log('Promise');
});

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Fim');
```

### Saída:
```
Início
Fim
Promise
Timeout
```

Notou que `Promise` vem antes do `Timeout`? Isso é porque microtarefas têm **prioridade** sobre macrotarefas. O event loop esvazia todas as microtarefas antes de pegar a próxima macrotarefa da fila.

## Por Que Isso Importa?

Se você está lidando com chamadas assíncronas, `setTimeout`, Promises, ou até eventos de clique, **entender o event loop é essencial para prever o comportamento do seu código**.

Você já teve um bug que desaparecia quando colocava um `console.log()` no meio? Pode ser uma pista de que você está enfrentando uma corrida entre tarefas assíncronas. Conhecer o event loop te ajuda a evitar essas armadilhas.

## Dicas Rápidas

- `setTimeout(fn, 0)` **não** executa imediatamente. Ele espera o stack esvaziar.
- Promises são executadas **antes** de qualquer `setTimeout`.
- `await` pausa a execução de uma `async function`, mas **não bloqueia o event loop**.
- Código síncrono mal estruturado pode travar a UI de aplicações web — cuidado com loops pesados.

## Conclusão

O **event loop** pode parecer um detalhe técnico obscuro, mas ele é a engrenagem que faz o JavaScript parecer mais mágico do que é. Quando você entende como ele funciona, passa a escrever código mais previsível, mais eficiente e menos propenso a bugs estranhos.

Ficou curioso? Brinque com o [Loupe](http://latentflip.com/loupe/), uma ferramenta visual que mostra o event loop em ação. Você vai se surpreender.