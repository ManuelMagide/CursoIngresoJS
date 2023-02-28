function mostrar() {

	let nombre;
	let edad;
	let temperatura;
	let sexo;
	let estadoCivil;
	let validacion = false;
	let continuar;
	let personaTemperatura = '';
	let temperaturaMax = Number.NEGATIVE_INFINITY;
	let banderaTemp = 0;
	let contViudos = 0;
	let contMViudos = 0;
	let contMSolteros = 0;
	let contTerceraEdad = 0;
	let edadSolteros = 0;
	let promedioSolteros;

	while (!validacion) {

		nombre = prompt('Ingrese su nombre!');

		edad = prompt('Ingrese su edad');
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 1) {
			edad = prompt('Error! Ingrese nuevamente su edad');
			edad = parseInt(edad);
		}

		do {
			sexo = prompt('Indique su sexo F o M o NB').toLowerCase();
		} while (sexo != 'f' && sexo != 'm' && sexo != 'nb');

		do {
			estadoCivil = prompt('Indique estado civil. \nOpciones: \nsoltero \ncasado \nviudo').toLowerCase();
		} while (estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo');

		do {
			temperatura = prompt('Indique su temperatura corporal');
			temperatura = parseFloat(temperatura);
		} while (isNaN(temperatura));

		if (banderaTemp == 0) {
			banderaTemp = 1;
			temperaturaMax = temperatura;
			personaTemperatura = nombre;

		} else {
			if (temperatura > temperaturaMax) {
				temperaturaMax = temperatura;
				personaTemperatura = nombre;
			}
		}

		switch (estadoCivil) {
			case 'viudo':
				if (edad >= 18) {
					contViudos++;
				}
				if (sexo === 'm') {
					contMViudos++;
				}
				break;

			case 'soltero':
				if (sexo === 'm') {
					contMSolteros++;
					edadSolteros += edad;
				}
				break;
		}

		if (edad > 60 && temperatura > 38) {
			contTerceraEdad++;
		}

		continuar = confirm('desea continuar??')
		if (!continuar) {
			break;
		}
	}

	promedioSolteros = edadSolteros / contMSolteros;

	document.write('Persona con mas temperatura: ' + personaTemperatura + '<br>');
	document.write('Cantidad de hombres mayores de edad viudos: ' + contViudos + '<br>');
	document.write('Cantidad de hombres solteros: ' + contMSolteros + '<br>');
	document.write('Cantidad de hombres viudos: ' + contMViudos + '<br>');
	document.write('Personas de la tercera edad con mas de 38 de temperatura: ' + contTerceraEdad + '<br>');
	document.write('Promedio de edad de hombres solteros: ' + promedioSolteros + '<br>');
}

//do while es para opciones