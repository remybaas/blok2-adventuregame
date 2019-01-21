var amount = prompt("Hoeveel namen wil je?" + "Minimaal 3");

var names = [];

for (var i= 0; i < amount; i++) {
	names[i] = prompt("Voer hier een naam in.")
}

document.write(names);