function mostrar() {
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño) {

		case 'Julio':
		case 'Agosto':
			mensaje = 'Abrigate hace frio.';
			break;

		case 'Febrero':

		case 'Marzo':

		case 'Abril':

		case 'Mayo':

		case 'Junio':

		case 'Septiembre':

			mensaje = "Falta para el invierno.";
			break;

		default:
			mensaje = 'Ya pasamos el frio, ahora calor!';

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN