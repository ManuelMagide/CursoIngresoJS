function mostrar() {

	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch (destinoIngresado) {

		case 'Bariloche':

		case 'Ushuaia':
			mensaje = 'FRIO';
			break;

		default:
			mensaje = 'CALOR';
	}

	alert(mensaje);
}

//FIN DE LA FUNCIÓN