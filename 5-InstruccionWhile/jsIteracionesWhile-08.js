/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let contador;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	while (true) {

		numero = prompt("Ingrese el numero que quiera o escriba 'salir' para continuar.");

		if (numero === 'salir') {
			break;
		}

		numero = parseInt(numero);

		if (isNaN(numero)) {
			alert('Ingrese un numero para continuar, por favor.');
			continue;

		} else {

			if (numero >= 0) {

				sumaPositivos += numero;

			} else {

				multiplicacionNegativos *= numero;

			}
		}

	}


	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN