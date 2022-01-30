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
  lista.appendChild(tarefa) //sempre coloca o elemento filho no final do nó/elemento pai

  input.value = ''
}

// "Escutador" de eventos
novaTarefa.addEventListener('click', criarTarefa)

// Formulários permitem enviar dados para um servidor da internet, ou seja, sempre que um botão de formulário for clicado, ele vai tentar enviar dados para algum lugar e dar um refresh na pagina. Para evitar isso, utilizamos  método preventDefault() que PREVINE o comportamento PADRÃO de acontecer. Dessa forma, utlizando no nosso eventListener, evitamos que o botão atualize a página como de costume