var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function firstLoadGradient() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	
	setGradient();
}

function colorGenerator() {
	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", firstLoadGradient);

randomBtn.addEventListener("click", colorGenerator);

