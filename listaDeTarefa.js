const criarTarefa = (evento) =>{
    evento.preventDefault();
    console.log('test')
    const inputText = document.querySelector('[data-form-text]');
    const valor = inputText.value;

    const tarefa = document.querySelector('[data-task');
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo;

    inputText.value = ""

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);