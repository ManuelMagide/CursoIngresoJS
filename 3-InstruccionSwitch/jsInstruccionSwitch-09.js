function mostrar() {
	let estacionIngresada;
	let descuento;
	let precioBase;
	let precioTotal
	let destino;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	precioBase = 15000;

	switch (estacionIngresada) {

		case 'Invierno':
			switch (destino) {

				case 'Bariloche':
					descuento = 1.20;
					break;

				case 'Mar del plata':
					descuento = 0.80;
					break;

				default:
					descuento = 0.90;
			}
			break;

		case 'Verano':
			switch (destino) {

				case 'Bariloche':
					descuento = 0.80;
					break;

				case 'Mar del plata':
					descuento = 1.20;
					break;

				default:
					descuento = 1.10;
			}
			break;

		case 'Otoño':
		case 'Primavera':
			switch (destino) {

				case 'Bariloche':
				case 'Cataratas':
				case 'Mar del plata':
					descuento = 1.10;
					break;

				default:
					descuento = 1;
			}

	}


	precioTotal = precioBase * descuento;

	alert(precioTotal);


}//FIN DE LA FUNCIÓN