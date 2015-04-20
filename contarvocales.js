var incrementador = 0;
var str = "follow";
var subcadena;

subcadena = str.toLowerCase();
for (i = 0; i < str.length; i++) {
	if ("aeiou".indexOf(subcadena[0]) > -1) {
		incrementador++;
	}
	subcadena = subcadena.slice(1);
}

console.log(incrementador);