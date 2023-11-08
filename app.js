var listaNumSorteados = [];

var maxChute = 10;

var numeroSecreto = gerarNumAleatorio();
    console.log(numeroSecreto);

function msgInicial(){
   
    mudarTextoHTML('h1', `Olá, jogadores!`);
    mudarTextoHTML('h2', `Sejam bem vindos ao JOGO DO NÚMERO SECRETO! BOA SORTE!`);
    mudarTextoHTML('p', `Escolha um numero entre 1 e ${maxChute}`);
}

function mudarTextoHTML (tag, texto){
    var dados = document.querySelector(tag);
        dados.textContent = texto;
        responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.3});
}

function gerarNumAleatorio (){
    var numEscolhido = parseInt(Math.random() * maxChute + 1);
    
    //essa aqui é a váriável que limita a quantidade de números da lista
    var elementosDaLista = listaNumSorteados.length;

    if (elementosDaLista == maxChute){
        listaNumSorteados = [];
    }
    // esse aqui é o if e else para gerar o número e incluir para que não se repita
        if (listaNumSorteados.includes(numEscolhido)){
            return gerarNumAleatorio ();
    }   else {
            listaNumSorteados.push(numEscolhido);
            console.log(listaNumSorteados);
            return numEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    var chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){

        mudarTextoHTML('h1', `Parabéns!`);
        mudarTextoHTML('h2',` Você acertou!`);
        mudarTextoHTML('p',);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numeroSecreto){
            mudarTextoHTML('h1', `Pooxa!`);
            mudarTextoHTML('h2',`Tu errou!`);
            mudarTextoHTML('p', `Tenta de novo aí! Se liga que o número é menor`);
       } else{
            mudarTextoHTML('h1', `Pooxa!`);
            mudarTextoHTML('h2',`Tu errou!`);
            mudarTextoHTML('p', `Tenta de novo aí! Se liga que o número é maior`);
       } 
       limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

msgInicial();
gerarNumAleatorio();


