const salvarLocal = () => {
  let input = document.querySelector('[data-form-input]')
  const valor = {valor: input.value, classe: 'task'}

  const listaLocal = JSON.parse(localStorage.getItem('tarefas') || '[]')
  listaLocal.push(valor)
  localStorage.setItem('tarefas', JSON.stringify(listaLocal))
}

export default salvarLocal
