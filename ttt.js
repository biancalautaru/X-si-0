function printtt() {
	let c = "";
	for (let i = 0; i < 9; i++) {
		if (tabla[i] == "?")
			c += "| " + (i + 1) + " ";
		else
			c += "| " + tabla[i] + " ";
		if (i % 3 == 2)
			c += "|\n";
	}
	return c;
}

function valid(poz) {
	if (isNaN(poz) || poz < 1 || poz > 9)
		return false;
	if (tabla[poz - 1] != "?")
		return false;
	return true;
}

function win() {
	if (tabla[0] != "?" && tabla[0] === tabla[4] && tabla[0] === tabla[8])
		return tabla[0];
	if (tabla[2] != "?" && tabla[2] === tabla[4] && tabla[2] === tabla[6])
		return tabla[2];
	for (let i = 0; i <= 6; i += 3)
		if (tabla[i] != "?" && tabla[i] === tabla[i + 1] && tabla[i] === tabla[i + 2])
			return tabla[i];
	for (let i = 0; i < 3; i++)
		if (tabla[i] != "?" && tabla[i] === tabla[i + 3] && tabla[i] === tabla[i + 6])
			return tabla[i];
	return -1;
}

function draw() {
	for (let i = 0; i < 9; i++)
		if (tabla[i] === "?")
			return false;
	return true;
}

function computer_move() {
	return Math.floor(Math.random() * 9) + 1;
}

function mutare_jucator() {
	let poz = parseInt(prompt(printtt(tabla) + "Unde vrei să pui următorul semn?"));
	while (!valid(poz))
		poz = parseInt(prompt(printtt(tabla) + "Poziția nu este validă. Introdu alt număr!"));
	tabla[poz - 1] = semnJucator;
}

function mutare_calculator() {
	alert(printtt(tabla) + "Acum va fi rândul calculatorului.");
	let poz;
	do {
		poz = computer_move();
	} while (!valid(poz));
	tabla[poz - 1] = semnCalculator;
}

let nume = prompt("Hai să jucăm X și 0! Cum te cheamă?");
var semnJucator = prompt("Bună, " + nume + "! Cu ce vrei să joci? X sau 0? X începe primul.");
var semnCalculator = semnJucator === "X" ? "0" : "X";
var tabla = new Array();
for (let i = 0; i < 9; i++)
	tabla.push("?");
let mutare = 0;
while (true) {
	mutare++;
	if (mutare % 2 === 0)
		if (semnJucator === "0")
			mutare_jucator();
		else
			mutare_calculator();
	else
		if (semnJucator === "X")
			mutare_jucator();
		else
			mutare_calculator();
	let resWin = win();
	if (resWin === -1 && draw()) {
		alert(printtt(tabla) + "Remiză!");
		break;
	}
	else
		if (resWin != -1 ) {
			if (resWin == semnJucator)
				alert(printtt(tabla) + "Bravo, " + nume + ", ai câștigat!");
			else
				alert(printtt(tabla) + "Ai pierdut :(");
			break;
		}
}