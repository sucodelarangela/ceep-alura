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
  const itemDaLista = botaoConclui.parentNode
  const nomeDoItem = itemDaLista.querySelector('p').textContent
  const listaLocal = JSON.parse(localStorage.getItem('tarefas') || '[]')
  const item = listaLocal.find(item => item.valor === nomeDoItem)

  if (item.classe === 'task') {
    item.classe = 'done'
    localStorage.setItem('tarefas', JSON.stringify(listaLocal))
    location.reload()
  } else if (item.classe === 'done') {
    item.classe = 'task'
    localStorage.setItem('tarefas', JSON.stringify(listaLocal))
    location.reload()
  }
}

// semelhantemente ao IIFE, podemos exportar nosso componente criado como um módulo. Para isso, usamos o método export default + nome do componente
export default BotaoConclui

// caso fosse necessário exportar também nossa função concluirTarefa, poderíamos fazer o export através de um objeto:
// export {BotaoConclui, concluirTarefa}
// é possível também colocar o export diretamente na frente da const BotaoConclui
