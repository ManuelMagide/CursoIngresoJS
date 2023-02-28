/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/
function mostrar() {
	let bodega;
	let producto;
	let peso;
	let banderaPeso = 0;
	let validacion = false;
	let continuar;
	let acumuladorPesoA = 0;
	let acumuladorPesoC = 0;
	let acumuladorPesoL = 0;
	let pesoMax = Number.NEGATIVE_INFINITY;
	let productoPesado;
	let contA = 0;
	let contL = 0;
	let contC = 0;
	let banderaContador = 0;
	let acumuladorTotal;
	let contTotal;
	let bodegaMasIngresos = Number.NEGATIVE_INFINITY;
	let bodegaMasLlena;
	let bodegaLlena;
	let bodegaMax = Number.NEGATIVE_INFINITY;
	let banderaLlena = 0;
	let porcentajeA;
	let porcentajeC;
	let porcentajeL;
	let promedio;

	while (!validacion) {

		bodega = prompt('Elija una bodega: \navellaneda \ncaba \nlanus').toLowerCase();
		while (bodega != 'avellaneda' && bodega != 'caba' && bodega != 'lanus') {
			bodega = prompt('Error!! Elija una bodega: \navellaneda \ncaba \nlanus').toLowerCase();
		}

		producto = prompt('Ingrese el producto que quiera agregar a la bodega');

		do {
			peso = prompt('Ingrese el peso exacto del producto.');
			peso = parseFloat(peso);
		} while (isNaN(peso));

		switch (bodega) {
			case 'avellaneda':
				if (peso <= 20000) {
					acumuladorPesoA += peso;
					contA++;
				}
				break;

			case 'caba':
				if (peso <= 25000) {
					acumuladorPesoC += peso;
					contC++;
				}
				break;

			default:
				if (peso <= 15000) {
					acumuladorPesoL += peso;
					contL++;
				}
		}

		if (banderaPeso == 0) {
			banderaPeso = 1;
			pesoMax = peso;
			productoPesado = producto;

		} else {
			if (peso > pesoMax) {
				pesoMax = peso;
				productoPesado = producto;
			}
		}

		if (banderaContador == 0) {
			banderaContador = 1;
			bodegaMasIngresos = contA;
			bodegaMasLlena = bodega;

		} else {
			if (contA > bodegaMasIngresos) {
				bodegaMasIngresos = contA;
				bodegaMasLlena = bodega;
			}
		}

		if (banderaContador == 0) {
			banderaContador = 1;
			bodegaMasIngresos = contA;
			bodegaMasLlena = bodega;

		} else {
			if (contL > bodegaMasIngresos) {
				bodegaMasIngresos = contL;
				bodegaMasLlena = bodega;
			}
		}

		if (banderaContador == 0) {
			banderaContador = 1;
			bodegaMasIngresos = contC;
			bodegaMasLlena = bodega;

		} else {
			if (contC > bodegaMasIngresos) {
				bodegaMasIngresos = contC;
				bodegaMasLlena = bodega;
			}
		}

		if (banderaLlena == 0) {
			banderaLlena = 1;
			bodegaMax = acumuladorPesoA;
			bodegaLlena = bodega;
			
		} else {
			if (acumuladorPesoA > bodegaMax) {
				bodegaMax = acumuladorPesoA;
				bodegaLlena = bodega;
			}
		}

		if (banderaLlena == 0) {
			banderaLlena = 1;
			bodegaMax = acumuladorPesoL;
			bodegaLlena = bodega;
			
		} else {
			if (acumuladorPesoL > bodegaMax) {
				bodegaMax = acumuladorPesoL;
				bodegaLlena = bodega;
			}
		}

		if (banderaLlena == 0) {
			banderaLlena = 1;
			bodegaMax = acumuladorPesoC;
			bodegaLlena = bodega;
			
		} else {
			if (acumuladorPesoC > bodegaMax) {
				bodegaMax = acumuladorPesoC;
				bodegaLlena = bodega;
			}
		}

		continuar = confirm('desea continuar??')
		if (!continuar) {
			break;
		}
	}

	porcentajeA = acumuladorPesoA * 100 / 20000;
	porcentajeC = acumuladorPesoC * 100 / 25000;
	porcentajeL = acumuladorPesoL * 100 / 15000;

	acumuladorTotal = acumuladorPesoA + acumuladorPesoC + acumuladorPesoL;
	contTotal = contA + contC + contL;
	promedio = acumuladorTotal / contTotal;

	document.write('Producto mas pesado entre las 3 bodegas: ' + productoPesado + '<br>');
	document.write('Promedio de peso general: ' + promedio + '<br>');
	document.write('Bodega con mas ingresos: ' + bodegaMasLlena + '<br>');
	document.write('Bodega mas llena: ' + bodegaLlena + '<br>');
	document.write('Porcentaje de bodega Avellaneda: ' + contA + '%' + '<br>');
	document.write('Porcentaje de bodega Caba: ' + contC + '%' + '<br>');
	document.write('Porcentaje de bodega Lanus: ' + contL + '%' + '<br>');
}

/*	DO WHILE
do {
	= prompt().toLowerCase();
} while ();

document.write()

if (bandera == 0) {
			bandera = 1;
			
		} else {
			if ( > ) {

			}

*/