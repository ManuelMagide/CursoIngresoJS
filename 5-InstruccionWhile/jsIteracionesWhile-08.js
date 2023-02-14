/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numero;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	while (true) {

		numero = prompt('Ingrese por favor un numero o escriba "salir" para continuar.');
		numero = parseInt(numero);

		if (isNaN (numero) || numero == "salir") {
			break;
		} else {

			if (numero >= 0) {

				sumaPositivos += numero;
				
			} else {

					multiplicacionNegativos = numero;

			}
		}

		contador++;
	}


	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN