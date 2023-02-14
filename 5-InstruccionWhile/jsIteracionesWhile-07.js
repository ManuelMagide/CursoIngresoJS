/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let numero;

	contador = 0;
	acumulador = 0;

	while (true) {

		numero = prompt("Ingrese el numero que quiera o escriba 'salir' para continuar.");
		numero = parseInt(numero);

		if (isNaN(numero) || numero == 'salir') {
			break;
		}

		acumulador += numero;

		contador++;
	}

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN