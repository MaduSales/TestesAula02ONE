let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Remove o atributo quando o jogo finaliza e deixa o botão disponível.

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