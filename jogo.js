var altura;
var largura;
var vidas = 1;
var tempo = 10;

var criaMoscaTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
    criaMoscaTempo = 1500;
} else if (nivel === 'dificil') {
    criaMoscaTempo = 1000;
} else if (nivel === 'extremo') {
    criaMoscaTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function () {
    tempo--;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {

    //Remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'game_over.html';
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = (posicaoX < 0) ? 0 : posicaoX;
    posicaoY = (posicaoY < 0) ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //Criar o elemento HTML
    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosquito';
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2);
    switch (lado) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}