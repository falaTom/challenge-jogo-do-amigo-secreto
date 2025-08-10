// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Adicionar ao array
    amigos.push(nome);

    // Atualizar lista
    atualizarLista();

    // Limpar campo
    input.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa para evitar duplicados

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}


function resetarJogo() {
    amigos = []; // Limpa o array

    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista na tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
}