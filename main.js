// para trazer os módulos exportados de outros arquivos, usamos o método import + nome do componente + endereço do código
import BotaoConclui from './components/conclui_tarefa.js'
import BotaoDeleta from './components/deleta_tarefa.js'
import salvarLocal from './components/salvar_local.js'

// Seleciona um item do DOM através de seu "data-attribute":
const novaTarefa = document.querySelector('[data-form-button]')
const listaLocal = JSON.parse(localStorage.getItem('tarefas') || '[]')
const lista = document.querySelector('[data-list]')

listaLocal.forEach((itemDaLista, indice) => {
  const tarefa = document.createElement('li')
  tarefa.classList.add('task')
  lista.appendChild(tarefa)

  const conteudo = document.querySelectorAll('.task')
  conteudo[indice].innerHTML = itemDaLista.valor
  console.log(lista)
})

// "Escutador" de eventos
novaTarefa.addEventListener('click', salvarLocal)
