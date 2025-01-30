let = listaAmigos = []

// Referência ao botão na página
let botaoAdd = Document.getElementById('adtionamigo')
let botaoSortear = document.getElementById('sorteioamigo')
 // Função que adiciona o valor do input na lista
function adicionarAmigo(){

    // Obter o valor do input
    const input = document.getElementById('amigo');
    const valor = input.value.trim();
    if (valor) {
        listaAmigos.push(valor);
        input.value = ''
        atualizarLista()
    } else{
        alert('Por favor, insira um valor válido!');
    }

}

// Adicionar o valor à lista 
listaAmigos.push(valor);


atualizarLista();

function atualizarLista(){
    const listaElement = document.getElementById('listaAmigos')
    listaElement.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        console.log(listaAmigos)
        li.textContent = amigo;
        listaElement.appendChild(li);
    });

}
document.getElementById('sorteioamigo').addEventListener(onclick, sortearAmigo);

function sortearAmigo(){
    let lista = document.querySelectorAll(listaAmigos);

    if (lista.length === 0) {
        document.getElementById('resultado').textContent = "Não há participantes na lista!";
        return;
    }
    let nomeAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSelecionado = lista[nomeAleatorio].textContent
};
document.getElementById('resultado').textContent = amigoSelecionado;
botaoAdicionar.addEventListener('', addAmigo);
