// Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()
{
	//tomo la edad  

	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad < 17)
	{
		alert('no es adulto.');
	} else {
		alert('es adulto.');
	}

	/* if(edad > 17) == if (edad >= 18)
	{
		alert('Sos mayor de edad')
	} */

}//FIN DE LA FUNCIÓN txtIdEdad

/* 
	OPERADOR DE COMPARACION 
	== IGUAL A 
	> MAYOR A
	>= MAYOR IGUAL A 
*/