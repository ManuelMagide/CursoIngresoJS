//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;

	if (edad >= 18)
	{
		alert ('Sos mayor de edad.');
	} 
	//else if ...
		else
	{ if(edad >= 13 && edad <= 17)
		{
			alert('Sos adolescente.');
		}
		else 
		{
			alert('Sos un niño.');
		}
	}

	/* ESTA MAL REALIZADO
	if(edad >= 13 && edad < 18)
	{
		alert('Sos adolescente.');
	} else {
		if (edad < 13){
			alert('Sos un niño.');
		}
	}
	if (edad > 17)
	{
		alert('Sos mayor de edad.');
	}
	*/

}//FIN DE LA FUNCIÓN