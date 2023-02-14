function mostrar() {
	//tomo el mes

	let mesDelAño;

	mesDelAño = document.getElementById('txtIdMes').value;

	// alert(mesDelAño);

	switch (mesDelAño) {

		case 'Enero':
			alert("que comiences bien el año!!!.");
			break;

		case 'Marzo':
			alert("a clases!!!.");
			break;

		case 'Julio': //mesDelAño === 'Julio'.
			alert("se vienen las vacaciones!!!.");
			break;

		case 'Diciembre':
			alert("Felices fiesta!!!.");
			break;

		default:
			alert('Es otro mes.');
	}

}//FIN DE LA FUNCIÓN

/* if (mesDelAño == 'Enero') {
	alert ('Es enero')
} 

ESTE ES IGUAL A 

switch (mesDelAño) {

		case 'Enero':
			alert('Es enero');
			break;

LA IGUALDAD ESTRICTA === COMPARA EL TIPO DE DATO
LA IGUALDAD == COMPARA EL VALOR
*/