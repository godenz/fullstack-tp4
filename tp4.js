var arrayEntrada = ["follow", "the", "white", "rabbit"];
var arraySalida = [];

var incrementador;
var str;
var subcadena;

for (j = 0; j < arrayEntrada.length; j++) {

	incrementador = 0;
	str = arrayEntrada[j];
	subcadena = str.toLowerCase();
	for (i = 0; i < str.length; i++) {
		if ("aeiou".indexOf(subcadena[0]) > -1) {
			incrementador++;
		}
		subcadena = subcadena.slice(1);
	}

	arraySalida.push(incrementador);
}

console.log(arraySalida);