let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

exibirTextoNaTela('h1', 'Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100');

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){
    console.log('O botão foi clicado! ' + numeroSecreto);
}