/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia = 0;

	respuesta = "si";

	while (respuesta == "si") {

		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);

		if (isNaN (numero)) {
			alert ('Error!! Ingrese solo numeros')
			continue;
		}

		if (numero < 0) {
			sumaNegativos += numero;
			contadorNegativos ++;

		} else {
			if (numero > 0) {
				sumaPositivos += numero;
				contadorPositivos ++;

			} else {
				contadorCeros ++;

			}
		}

		if (numero % 2 == 0) {
			contadorPares ++;
		}

		respuesta = prompt ('¿Desea continuar? Si o no')
		if (respuesta == 'no') {
			break;
		}
	}

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;

	diferencia = sumaPositivos + sumaNegativos;

	document.write("La suma de negativos es :" + sumaNegativos + '<br>');
	document.write("La suma de positivos es :" + sumaPositivos + '<br>');
	document.write("La cantidad de positivos es :" + contadorPositivos + '<br>');
	document.write("La cantidad de negativos es :" + contadorNegativos + '<br>');
	document.write("La cantidad de ceros es :" + contadorCeros + '<br>');
	document.write("La cantidad de pares es :" + contadorPares + '<br>');
	document.write("El promedio de negativos es :" + promedioNegativos + '<br>');
	document.write("El promedio de positivos es :" + promedioPositivos + '<br>');
	document.write("La diferencia entre positivos y negativos es :" + diferencia + '<br>');
}//FIN DE LA FUNCIÓN