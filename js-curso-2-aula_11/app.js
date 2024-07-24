let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 4');
}

exibirMensagemInicial();


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 4 + 1);

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ //Método "includes" verifica se aquele número está em um determinado parâmetro
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona um objeto ao final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}