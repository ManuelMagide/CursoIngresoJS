//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// el && es para unir condiciones.
	if(edad > 12 && edad < 18)
	{
		alert('Sos adolescente')
	}

}//FIN DE LA FUNCIÓN