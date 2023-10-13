const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];


//Creamos los números de las horas
for(let i=1; i<=12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//Creando la barra de sgundos
for(let i=1; i<=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {
	let date = new Date();
	let currentHours = date.getHours();
	let currentMinutes = date.getMinutes();
	let currentSeconds = date.getSeconds();
	
	/*--------------------------------
	60 segundos = 360 grados así que 1 segundo = 360/60 = 6 grados
	60 minutos = 360 grados así que 1 minuto = 360/60 = 6 grados
	12 horas = 360 grados asi que 1 hora = 360 / 12 = 30 grados
	
	1 hora = 30 grados lo que significa que 60 minutos = 30 grados así que 1 minuto = 30 / 60 = 0.5 o 1/2 grados
	Así que la fórmula para las horas será (Horas * 30 + minutos / 2)
	----------------------------------*/
	
	handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
	handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
	handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
}

//Llamamos a la función "hora actual" (getCurrentTime) cuando carge la página
getCurrentTime();

//Llamamos a la función "hora actual" (getCurrentTime) cada segundo para verlo en tiempo real
setInterval(getCurrentTime, 1000); //1000ms = 1seg








