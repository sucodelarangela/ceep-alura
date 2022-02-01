// para trazer os módulos exportados de outros arquivos, usamos o método import + nome do componente + endereço do código
import BotaoConclui from './components/conclui_tarefa.js'
import BotaoDeleta from './components/deleta_tarefa.js'
import salvarLocal from './components/salvar_local.js'

// Seleciona um item do DOM através de seu "data-attribute":
const novaTarefa = document.querySelector('[data-form-button]')
const listaLocal = JSON.parse(localStorage.getItem('tarefas') || '[]')
const lista = document.querySelector('[data-list]')

listaLocal.forEach(itemDaLista => {
  const tarefa = document.createElement('li')
  tarefa.classList.add(`${itemDaLista.classe}`)
  tarefa.innerHTML = `<p class="content">${itemDaLista.valor}</p>`
  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDeleta())
  lista.appendChild(tarefa)
})

// "Escutador" de eventos
novaTarefa.addEventListener('click', salvarLocal)
