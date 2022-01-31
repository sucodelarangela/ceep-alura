;(() => {
  // Seleciona um item do DOM através de seu "data-attribute":
  const novaTarefa = document.querySelector('[data-form-button]')

  // Criar uma constante que abriga uma função dentro de si:
  const criarTarefa = evento => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    let input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}<p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa) //sempre coloca o elemento filho no final do nó/elemento pai

    input.value = ''
  }

  // "Escutador" de eventos
  novaTarefa.addEventListener('click', criarTarefa)

  const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui //para inserí-lo dentro da <li> criada com a tarefa
  }

  const concluirTarefa = evento => {
    // para saber que elemento foi clicado, usa-se a propriedade .target:
    const botaoConclui = evento.target

    // para atribuir a ação do evento a um elemento pai, no caso, nossa <li>, usa-se a propriedade .parentElement:
    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
  }

  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
  }

  const deletarTarefa = evento => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()

    return botaoDeleta
  }
})()

// Formulários permitem enviar dados para um servidor da internet, ou seja, sempre que um botão de formulário for clicado, ele vai tentar enviar dados para algum lugar e dar um refresh na pagina. Para evitar isso, utilizamos  método preventDefault() que PREVINE o comportamento PADRÃO de acontecer. Dessa forma, utlizando no nosso eventListener, evitamos que o botão atualize a página como de costume
