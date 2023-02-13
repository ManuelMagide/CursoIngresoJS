function mostrar() {
	let contador;
	let acumulador;
	let numero;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {

		numero = prompt('Por favor ingresa un numero.');
		numero = parseInt (numero);

		acumulador += numero;
		contador++;

	}
	
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / 5;
}//FIN DE LA FUNCIÓN