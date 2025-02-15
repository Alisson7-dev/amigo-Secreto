let listaAmigos = []
// Referência ao botão na página
let botaoSortear = document.getElementById('sorteioamigo')
 // Função que adiciona o valor do input na lista
function adicionarAmigo(){
 // Obter o valor do input
    const input = document.getElementById('amigo');
    const valor = input.value.trim();
    if(valor) {
        listaAmigos.push(valor);
        input.value = ''
        atualizarLista()
    } else{
        alert('Por favor, insira um valor válido!');
    }

}

atualizarLista();

function atualizarLista(){
    const listaElement = document.getElementById('listaAmigos')
    listaElement.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });

}


//função que sorteia aleatóriamente o amigo
function sortearAmigo(){
    
   //verifica se o input nao esta vazio
    if (listaAmigos.length === 0) {
        document.getElementById('resultado').textContent = "Não há participantes na lista!";
        return;
    }
    //sorteia os nomes
    else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let nomeSorteado = listaAmigos[indiceAleatorio];
        document.getElementById('resultado').textContent =`Seu amigo secreto é:  ${nomeSorteado}`;
        listaAmigos.splice(indiceAleatorio, 1);
        atualizarLista();
        ocultarlista();
    }
};

function ocultarlista(){
   let  listaElement = document.getElementById('listaAmigos');
   listaElement.innerHTML = '';
}
