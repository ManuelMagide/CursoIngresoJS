/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables

	let numero;
	let numeroMaximo = -Infinity;
	let numeroMinimo = Infinity;

	//iniciar variables

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

			if (numero > numeroMaximo) {

				numeroMaximo = numero;

			}

			if (numero < numeroMinimo) {

				numeroMinimo = numero;
			}
		}
	}

	document.getElementById('txtIdMinimo').value = numeroMinimo;
	document.getElementById('txtIdMaximo').value = numeroMaximo;

}//FIN DE LA FUNCIÓN