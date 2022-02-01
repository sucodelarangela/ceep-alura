const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')
  botaoDeleta.innerText = 'deletar'

  botaoDeleta.addEventListener('click', deletarTarefa)

  return botaoDeleta
}

const deletarTarefa = evento => {
  const botaoDeleta = evento.target
  const itemDaLista = botaoDeleta.parentNode
  const nomeDoItem = itemDaLista.querySelector('p').textContent
  const listaLocal = JSON.parse(localStorage.getItem('tarefas') || '[]')
  const posicaoDoItem = listaLocal.findIndex(item => item.valor === nomeDoItem)
  console.log(posicaoDoItem)
  listaLocal.splice(posicaoDoItem, 1)
  localStorage.setItem('tarefas', JSON.stringify(listaLocal))
  location.reload()
}

export default BotaoDeleta
