function mostrar() {
	let estacionIngresada;
	let destino;
	let mensaje;

	destino = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch (estacionIngresada) {

		case 'Invierno':
			switch (destino) {

				case 'Bariloche':
					mensaje = 'Se viaja.';
					break;

				default:
					mensaje = 'No se viaja.';
			}
			break;

		case 'Verano':
			switch (destino) {

				case 'Mar del plata':
				case 'Cataratas':
					mensaje = 'Se viaja.';
					break;

				default:
					mensaje = 'No se viaja.';
			}
			break;

		case 'Otoño':
			mensaje = 'Se viaja'
			break;

		case 'Primavera':
			switch (destino) {

				case 'Bariloche':
					mensaje = 'No se viaja.'
					break;

				default:
					mensaje = 'Se viaja.'
			}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN