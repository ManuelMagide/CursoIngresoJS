//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// NEGAR UN VALOR --> !

	/*if(edad < 13 || edad > 17)
	{
		alert('No es adolescente.')
	} */

	// EL && SE USA CUANDO NECESITAMOS UNA CONDICION QUE DA EN UNA MISMA LINEA DE NUMEROS. EJEMPLO: UN NUMERO DENTRO DEL RANGO DE 5 A 11.
	// SI PONEMOS BUSCAR UNA CONDICION DE 5 PARA BAJO Y 11 PARA ARRIBA NO FUNCIONA Y SE TIENE Q USAR ||.
	if(!(edad >= 13 && edad <= 17))
	{
		alert('No es adolescente.');
	}

	/* Esta mal asi
	if(edad > 13 && edad < 18)
	{
	} else {
		alert('No sos adolescente.')
	} */

}//FIN DE LA FUNCIÓN