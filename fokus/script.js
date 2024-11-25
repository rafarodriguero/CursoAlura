const html = document.querySelector('html');
const titulo = document.querySelector('.app__title');
const banner = document.querySelector('.app__image');
const tempoNaTela = document.getElementById('timer');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.getElementById('alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sons/play.wav');
const audioPausa = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const startPauseBt = document.getElementById('start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarImg = document.querySelector('#start-pause img');

const duracaoFoco = 5//1500;
const duracaoDescansoCurto = 5//300;
const duracaoDescansoLongo = 5//900;

let tempoDocorridoEmSegundos = duracaoFoco
let intervaloId = null

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDocorridoEmSegundos = duracaoFoco
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoDocorridoEmSegundos = duracaoDescansoCurto
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoDocorridoEmSegundos = duracaoDescansoLongo
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = 'Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>';
            break;

        case "descanso-curto":
            titulo.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>';
            break;

        case "descanso-longo":
            titulo.innerHTML = 'Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>';
            break;                

        default:
            break;
    }
    
}

const contagemRegressiva = () => {
    if(tempoDocorridoEmSegundos <= 0) {
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDocorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
    iniciarOuPausarImg.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar";
    iniciarOuPausarImg.setAttribute('src', './imagens/play_arrow.png');
    intervaloId = null
}

function mostrarTempo () {
    const tempo = new Date(tempoDocorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br',{minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()