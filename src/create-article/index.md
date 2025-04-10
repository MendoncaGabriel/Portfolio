Se você é desenvolvedor, não basta apenas saber "dar um commit". Git e GitHub são como o idioma que falamos no mundo do código colaborativo. Mas a verdade é que muitos desenvolvedores ainda usam essas ferramentas só no básico, deixando de lado recursos poderosos como branches bem planejadas, rebase estratégico, stash salvador de commits perdidos, pull requests com code reviews eficazes, e até GitHub Actions para automação de tarefas.

Neste artigo, vamos além do "add, commit, push" e mergulhamos em tudo que você precisa dominar para se destacar de verdade num time de desenvolvimento moderno.

---

## Entendendo de verdade as branches

Branches não são apenas ramificações do seu código — são a base para um fluxo de trabalho organizado. Trabalhar com a `main` diretamente é como fazer cirurgia sem luvas.

A ideia é simples: cada feature, bugfix ou experimento deve acontecer numa branch isolada. Isso evita conflitos, facilita testes e garante que a `main` esteja sempre em estado estável (idealmente pronta para produção).

### Exemplo de estratégia de branches:
- `main`: código estável em produção
- `develop`: integração de novas features antes de subir para produção
- `feature/nome-da-feature`: cada funcionalidade em uma branch separada
- `hotfix/ajuste-crítico`: correções urgentes direto da `main`

---

## Merge vs Rebase: qual usar?

Ambos servem para integrar mudanças, mas com comportamentos e propósitos diferentes.

- **Merge** junta duas branches e preserva o histórico completo. Ideal para manter rastreabilidade e transparência em projetos com muitos colaboradores.
- **Rebase** "regrava" o histórico da branch como se ela tivesse nascido da base mais atual. Útil para manter um histórico mais linear e limpo, mas exige cuidado para evitar reescrever commits públicos.

**Regra de ouro:** use `merge` para integração entre branches de times e `rebase` para limpar sua branch local antes de subir.

---

## Git stash: o salvador da produtividade

Está mexendo no código, mas surge uma urgência para mudar de branch? Com `git stash`, você guarda suas alterações temporariamente sem precisar fazer commit.

```bash
git stash        # guarda as alterações
git checkout main
git stash pop    # recupera o que estava guardado
```

Simples, eficaz e salva vidas quando você precisa pausar algo sem perder o progresso.

---

## Pull Requests: colaboração com qualidade

Um pull request (PR) é mais do que "juntar código". Ele é o momento de revisar, aprender, ensinar e garantir qualidade.

### Boas práticas para PRs:
- Faça commits pequenos e descritivos
- Escreva uma boa descrição no PR (o quê, por quê, como)
- Use comentários claros no code review
- Respeite feedbacks, revise com calma
- Automatize testes para rodar no PR (falaremos disso com GitHub Actions)

---

## Code Review: feedback que constrói

Code review é um hábito que define equipes maduras. Serve para:
- Evitar bugs
- Compartilhar conhecimento
- Padronizar o código
- Melhorar design de soluções

Evite críticas pessoais. Foque em legibilidade, lógica e propósito. Uma boa pergunta para fazer é: **"Eu entenderia isso daqui a 6 meses?"**

---

## GitHub Actions: CI/CD sem complicações

Se antes CI/CD exigia Jenkins ou ferramentas externas, agora podemos automatizar tarefas direto no GitHub com o **GitHub Actions**.

### Como funciona:
Um arquivo `.yml` dentro do diretório `.github/workflows/` define quando e como executar ações.

### Estrutura básica:
```yaml
name: CI Pipeline

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Instalar dependências
        run: npm install
      - name: Rodar testes
        run: npm test
```

### Conceitos principais:
- **Eventos (`on`)**: Disparam o workflow (ex: `push`, `pull_request`, `schedule`, etc.)
- **Jobs**: Conjunto de tarefas a serem executadas
- **Steps**: Passos dentro de cada job (como instalar dependências, rodar testes, gerar builds)

### Exemplos de uso:
- Rodar testes automaticamente a cada PR
- Fazer deploy para Vercel/Netlify/Heroku
- Gerar builds de produção
- Checar formatação com linters

---

## Conclusão

Dominar Git e GitHub é mais do que saber comandos: é entender os *porquês* por trás das boas práticas. Branches bem gerenciadas evitam dor de cabeça. Rebase e stash otimizam seu fluxo. Pull requests e code reviews constroem código melhor em equipe. E GitHub Actions leva sua automação para outro nível — sem sair do repositório.

Então, da próxima vez que abrir o terminal, pense: o que eu posso fazer hoje que vai deixar o código mais limpo, mais seguro e o trabalho do meu time mais fluido?

Seja um dev que domina o fluxo, não um passageiro dele.