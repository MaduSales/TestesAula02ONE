let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

exibirTextoNaTela('h1', 'Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){
    let chute = document.querySelector('input').value; //Pega somente o valor da tag selecionada (no caso, o input)
    console.log(chute == numeroSecreto); //Deve ser exibido um valor booleano
}