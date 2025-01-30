
let numeroLimite = 10;
let numeroSecreto = gerarNomeAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
        //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
     
     // ESSA PARTE TEM A MESMA FUNCIONALIDADE PARA TRANSFORMAR O TEXTO EM VOZ...   
    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR'; 
    //     utterance.rate = 1.2; 
    //     window.speechSynthesis.speak(utterance); 
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do numero secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto)  {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor!');
        } else {
            exibirTextoNaTela('p','O numero é secreto é maior!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }

}

function gerarNomeAleatorio() {
    return parseInt(Math.random() * 10 + 1);    
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

function reiniciarJogo() {
    numeroSecreto = gerarNomeAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
