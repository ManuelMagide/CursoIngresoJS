/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = document.getElementById('txtIdImporte').value;
	resultado = document.getElementById('txtIdResultado').value;
	
	importe = parseInt(importe);
	resultado = parseInt(resultado);

	descuento = importe * 25 / 100;

	resultado = importe - descuento;
	
	document.getElementById('txtIdResultado').value = resultado;
}
// txtIdImporte
//txtIdResultado