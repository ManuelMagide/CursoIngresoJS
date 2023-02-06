//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert('Sos mayor de edad');
	}
	//else si o si desp de un if
	else
	{
		alert('Sos menor de edad');
	}

}
	/*MANERA INCORRECTA
	
	if(edad > 17)
	{
		alert('Sos mayor de edad')
	}

	if(edad < 18)
	{
		alert('Sos menor de edad')
	}
FIN DE LA FUNCIÓN
 
	OPERADOR DE COMPARACION 
	!= DISTINTO A 
	== IGUAL A 
	< MENOR A
	<= MENOR IGUAL A  */