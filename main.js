/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");
const CaricaID = document.getElementById('carica-completata')
let larghezzaProgress = 0;
const title = document.getElementById("loading-title");

const timer = setInterval(function () {

	larghezzaProgress++;


	if (progressBar) {
		progressBar.style.width = larghezzaProgress + '%'

	}
	if (larghezzaProgress >= 100) {
		title.innerHTML = 'CARICAMENTO COMPLETATO'

	}

	if (larghezzaProgress >= 100) {
		clearInterval(timer);
	}
	if (larghezzaProgress >= 100) {
		CaricaID.innerHTML = 'sei al 100%'
	}

}, 100);



/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
let tempoAttuale = document.getElementById("cronometro");
let tempoTrascorso = 0;
let time = null

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");



//Gestisco gli eventi
btnPlay.addEventListener("click", function () {

	btnPlay.disabled = true
	btnStop.disabled = false




	time = setInterval(function () {

		document.getElementById("cronometro").innerText = tempoTrascorso;
		tempoTrascorso++;



	}, 1000);



});



btnStop.addEventListener("click", function () {
	console.log("Premuto Stop!");

	btnStop.disabled = true
	btnPlay.disabled = false
	btnReset.disabled = false


	if (time !== null) {
		clearInterval(time)
	}




});

btnReset.addEventListener("click", function () {
	console.log("Premuto Reset!");

	if (time !== null) {
		clearInterval(time)
		time = null;

	}

	tempoTrascorso = 0;


	if (tempoAttuale) {
		tempoAttuale.innerText = 0;
	}


	btnPlay.disabled = false;
	btnStop.disabled = true;
}); 