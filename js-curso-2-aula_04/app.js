function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

exibirTextoNaTela('h1', 'Olá');
exibirTextoNaTela('p', 'Vamos jogar?');

// Podemos criar funções com parâmetros para economizar código e ainda deixá-lo limpo;