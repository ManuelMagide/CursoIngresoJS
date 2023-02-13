/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {

	let condicion = 0;

	while (condicion < 10) {

		//condicion = condicion + 1; //aca hago que el bucle no sea infinito. ES UN CONTADOR (forma de llamar). variable = variable + constante.
		//condicion += 1; // es lo mismo que arriba. SON EQUIVALENTES.
		//condicion++; // es lo mismo pero solo funciona con 1. OPERADOR DE POSINCREMENTO. MUESTRA DEL 0 AL 9
		//++condicion; // OPERADOR DE PREINCREMENTO. MUESTRA DEL 1 AL 10.	

		//console.log(condicion++);

		console.log (1 + condicion);

		condicion++;

	}

	/*console.log(condicion);

	condicion = 10;
	while (condicion > 0) {

		console.log(condicion--);
	} */
}//FIN DE LA FUNCIÓN