//VARIÁVEIS GLOBAIS
let numMax = 100;
let numeroSecreto = gerarNumAleatorio();
let numTentativas = 1

//FUNÇÃO PARA GERAR UM NÚMERO ALEATÓRIO
function gerarNumAleatorio(){
    return parseInt(Math.random() * numMax + 1);
}

//FUNÇÃO P EXIBIR O TEXTO NA TELA
function exibirTextosWeb(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
    //FUNÇÃO PARA EXIBIR MENSAGEM INICIAL
        function exibirMsgInicial(){
            exibirTextosWeb('h1', 'Jogo do número secreto');
            let mensagemEscolhaNumSecreto = `Escolha um número entre 1 e ${numMax} ` + ':)';
            exibirTextosWeb('p', mensagemEscolhaNumSecreto);
        }
        exibirMsgInicial();

//FUNÇÃO PARA VERIFICAR CHUTE
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextosWeb('h1','UHUL!');
        let palavraTentativa = numTentativas>1? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${numTentativas} ${palavraTentativa}`
        exibirTextosWeb('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   
    else if (chute>numeroSecreto){
        exibirTextosWeb('p','Ops, tente novamente! O número secreto é menor');
        limparCampo();
    } else {
        exibirTextosWeb('p','Ops, tente novamente! O número secreto é maior');
        limparCampo();
    }
    numTentativas++;
}
//FUNÇÃO PARA LIMPAR CAMPO
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

//FUNÇÃO PARA REINICIAR JOGO
function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    numTentativas = 1;
    exibirMsgInicial();
}