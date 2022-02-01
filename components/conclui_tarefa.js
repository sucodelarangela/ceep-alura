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

// semelhantemente ao IIFE, podemos exportar nosso componente criado como um módulo. Para isso, usamos o método export default + nome do componente
export default BotaoConclui

// caso fosse necessário exportar também nossa função concluirTarefa, poderíamos fazer o export através de um objeto:
// export {BotaoConclui, concluirTarefa}
// é possível também colocar o export diretamente na frente da const BotaoConclui
