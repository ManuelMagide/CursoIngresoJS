function mostrar() {
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño) {

		case 'Febrero':
			mensaje = 'Este mes tiene 28 dias.';
			break;

		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			mensaje = 'Este mes tiene 30 dias.';
			break;

		default:
			mensaje = 'Este mes tiene 31 dias.';
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN