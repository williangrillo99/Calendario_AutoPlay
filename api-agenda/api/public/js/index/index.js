var date = document.querySelector('#data');

now = new Date;
dayName = new Array ("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var dia = dayName[now.getDay()];
var data = now.getDate();
var mes = monName[now.getMonth()];
var ano = now.getFullYear();
date.innerHTML = `${dia}, ${data} de ${mes} de ${ano}`;