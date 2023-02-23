
function mostrar() {
	let nombre;
	let lugar;
	let temporada;
	let dias;
	let importe;
	let altura;
	let peso;
	let sexo;
	let equipaje;
	let paga;
	let validacion = false;
	let pasajeros = 0;
	let contadorAlta = 0;
	let contadorBaja = 0;
	let pesoAcumulado = 0;
	let diasVillaG = 0;
	let diasCordoba = 0;
	let diasPuerto = 0;
	let mayorDias = 0;
	let maxDias = '';
	let importeTotal = 0;
	let pesoMax = Number.NEGATIVE_INFINITY;
	let pesoMin = Number.POSITIVE_INFINITY;
	let nombreMax;
	let nombreMin;
	let importeMayor = Number.NEGATIVE_INFINITY;
	let lugarMayor;
	let alturaMayor = Number.NEGATIVE_INFINITY;
	let nombreMayorF;
	let contEfectivo = 0;
	let contMp = 0;
	let contTarjeta = 0;
	let contMayor = 0;
	let temporadaMax;
	let pasajerosC = 0;
	let pasajerosG = 0;
	let pasajerosP = 0;
	let pasajerosMax;
	let cantEquipaje = 0;
	let cantMujeres = 0;
	let cantHombres = 0;
	let cantNoB = 0;
	let porcentajeMujeres;
	let porcentajeEquipaje;
	let porcentajeHombres;
	let porcentajeNoB;
	let continuar;

	while (!validacion) {

		nombre = prompt('Ingrese su nombre').toUpperCase();
		while (!isNaN(nombre)) {
			nombre = prompt('Error!! Ingrese un nombre').toUpperCase();
		}

		lugar = prompt('Ingrese un lugar "Puerto Madryn", "Villa Gessel" o "Cordoba"').toUpperCase();
		while (lugar != "PUERTO MADRYN" && lugar != "VILLA GESSEL" && lugar != "CORDOBA") {
			lugar = prompt('Error!! Ingrese un lugar valido').toUpperCase();
		}

		temporada = prompt('Ingrese la temporada en la que desea viajar "alta" o "baja"').toUpperCase();
		while (temporada != "ALTA" && temporada != "BAJA") {
			temporada = prompt('Error!! Ingrese una temporada valida').toUpperCase();
		}

		dias = prompt('Ingrese la cantidad de dias que durara el viaje');
		dias = parseInt(dias);
		while (isNaN == dias) {
			dias = prompt('Error!! Ingrese una cantidad de dias valida ');
			dias = parseInt(dias);
		}

		importe = prompt('Ingrese el importe del viaje');
		importe = parseFloat(importe);
		while (isNaN == importe) {
			importe = prompt('Error!! Ingrese un importe valido');
			importe = parseFloat(importe);
		}

		altura = prompt('Ingrese su altura');
		altura = parseFloat(altura);
		while (isNaN == altura) {
			altura = prompt('Error!! Ingrese una altura valida');
			altura = parseFloat(altura);
		}

		peso = prompt('Ingrese su peso');
		peso = parseFloat(peso);
		while (isNaN == peso) {
			peso = prompt('Error!! Ingrese un peso valido');
			peso = parseFloat(peso);
		}

		sexo = prompt('Ingrese su sexo (F o M o NB)').toUpperCase();
		while (sexo != 'F' && sexo != 'M' && sexo != 'NB') {
			sexo = prompt('Error!! Ingrese un sexo valido (F o M o NB)').toUpperCase();
		}

		equipaje = prompt('Viaja con equipaje de mano?').toUpperCase();
		while (equipaje != 'SI' && equipaje != 'NO') {
			equipaje = prompt('Error!! Ingrese si o no').toUpperCase();
		}

		paga = prompt('¿Paga con mp, tarjeta o efectivo?').toUpperCase();
		while (paga != 'MP' && paga != 'TARJETA' && paga != 'EFECTIVO') {
			paga = prompt('Error!! Ingrese un medio de pago valido.').toUpperCase();
		}

		//PUNTO 1 NMASHEEEEEEEEEEEEEEEEEEEE

		pasajeros++;

		switch (temporada) {
			case 'ALTA':
				contadorAlta++;
				break;
			default:
				contadorBaja++;
		}

		switch (lugar) {
			case 'VILLA GESSEL':
				pesoAcumulado += peso;
				diasVillaG += dias;
				pasajerosG ++;
				break;
			case 'CORDOBA':
				diasCordoba += dias;
				pasajerosC ++;
				break;
			default:
				diasPuerto += dias;
				pasajerosP ++;
		}

		if (diasCordoba > mayorDias) {
			maxDias = 'CORDOBA';
			mayorDias = diasCordoba;
		}

		if (diasPuerto > mayorDias) {
			maxDias = 'PUERTO MADRYN';
			mayorDias = diasPuerto;
		}

		if (diasVillaG > mayorDias) {
			maxDias = 'VILLA GESSEL';
			mayorDias = diasPuerto;
		}

		importeTotal += importe;

		//PUNTO 2 NASHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

		if (peso > pesoMax) {
			pesoMax = peso;
			nombreMax = nombre;
		}

		if (peso < pesoMin) {
			pesoMin = peso;
			nombreMin = nombre;
		}

		if (importe > importeMayor) {
			importeMayor = importe;
			lugarMayor = lugar;
		}

		if (sexo == 'F') {
			alturaMayor = altura;
			nombreMayorF = nombre;
		}

		//PUNTO 3 NASHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

		switch (paga) {
			case 'EFECTIVO':
				contEfectivo++;
				break;
			case 'MP':
				contMp++;
				break;
			default:
				contTarjeta;
		}

		if (contEfectivo >= contMp && contEfectivo >= contTarjeta) {
			contMayor = contEfectivo;

		} else {
			if (contMp >= contEfectivo && contMp >= contTarjeta) {
				contMayor = contMp;

			} else {
				if (contTarjeta >= contMp && contTarjeta >= contEfectivo) {
					contMayor = contTarjeta;
				}
			}
		}

		if (contadorBaja > contadorAlta) {
			temporadaMax = 'BAJA';

		} else {
			if (contadorAlta > contadorBaja) {
				temporadaMax = 'ALTA';

			} else {
				temporadaMax = 'Se viajo de igual manera en las 2 temporadas.'
			}
		}

		if (pasajerosC >= pasajerosG && pasajerosC >= pasajerosP) {
			pasajerosMax = lugar;

		} else {
			if (pasajerosG >= pasajerosC && pasajerosG >= pasajerosP) {
				pasajerosMax = lugar;

			} else {
				if (pasajerosP >= pasajerosG && pasajerosP >= pasajerosC){
					pasajerosMax = lugar;
				}
			}
		}

		//PUNTO 4 NASHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE	

		switch (equipaje) {
			case 'SI':
				cantEquipaje ++;
				break;
		}

		switch (sexo) {
			case 'F':
				cantMujeres ++;
				break;
			case 'M':
				cantHombres ++;
				break;
			default:
				cantNoB ++;
		}

		porcentajeEquipaje = cantEquipaje / pasajeros * 100;
		porcentajeHombres = cantHombres / pasajeros * 100;
		porcentajeMujeres = cantMujeres / pasajeros * 100;
		porcentajeNoB = cantNoB / pasajeros * 100;

		continuar = confirm('Desea agregar algo?');
		if (!continuar) {
			break;
		}
	}

	document.write("Cantidad de personas que viajan en temporada alta: " + contadorAlta + '<br>');
	document.write("cantidad de personas que viajan en temporada baja :" + contadorBaja + '<br>');
	document.write("Peso acumulado de todo los que viajan a Gessel: " + pesoAcumulado + '<br>');
	document.write("El lugar con la mayor cantidad de dias acumulados: " + maxDias + '<br>');
	document.write("Importe total: " + importeTotal + '<br>');
	document.write("Nombre del pasajero mas pesado: " + nombreMax + '<br>');
	document.write("Nombre del pasajero mas liviano: " + nombreMin + '<br>');
	document.write("Donde se pago el mayor importe: " + lugarMayor + '<br>');
	document.write("Nombre de la mujer mas alta: " + nombreMayorF + '<br>');
	document.write("Forma de pago mas utilizada: " + contMayor + '<br>');
	document.write("Temporada en la que se viajo mas: " + temporadaMax + '<br>');
	document.write("Lugar que mas tuvo pasajeros: " + pasajerosMax + '<br>');
	document.write("Porcentaje de equipaje de mano: " + porcentajeEquipaje + '<br>');
	document.write("Porcentaje de hombres: " + porcentajeHombres + '<br>');
	document.write("Porcentaje de mujeres: " + porcentajeMujeres + '<br>');
	document.write("Porcentaje de No binarios: " + porcentajeNoB + '<br>');
}
