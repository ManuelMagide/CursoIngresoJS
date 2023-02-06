//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// el && es para unir condiciones.
	if(edad > 13 && edad < 18)
	{
		alert('Sos adolescente.');
	} 

	 /*if (edad > 18)
	{
	} else {

				if (edad > 12)
		{
			alert('Es adolescente.')
		} else {
			alert('No es adolescente.')
		}

	} */
	
	/*OPERADORES LOGICOS
	A	B	&&	||
	V	V	V	V
	V	F	F	V
	F	V	F	V
	F	F	F	F

	&& (AND)

	|| (O)

*/}//FIN DE LA FUNCIÓN