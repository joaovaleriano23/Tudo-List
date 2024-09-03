/*
Lista de tarefas
[x] Saber quando o botão foi clicado
[x] Pegar o texo dentro do Imput
[x] Colocar esse texto na tela
[x] Quando clicado no (✓) é informado que atarefa é foi concluida.
[x] Deletar a tarefa da tela [quando clicar no (X)]
*/
function adicionarTarefa() {
    const valorDoInput = document.querySelector("input").value

    const li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="mudaParaVerde(this)"> ✓ </span> <span class="span-1" onclick="deletarTarefa(this)">❌</span> '


    document.querySelector("ul").appendChild(li)

    
    document.querySelector("input").value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
    console.log(li)
    alert('Será excluido Permanete!')
}

function mudaParaVerde(li) {
    li.style.backgroundColor = "#31FF4E";
    console.log(li)
    alert('Tarefa Concluida!')

}
