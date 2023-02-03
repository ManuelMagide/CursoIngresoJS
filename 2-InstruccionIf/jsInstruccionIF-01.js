//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
function mostrar()
{
	//tomo la edad
	let edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	// edad '15' == 15 verdadero.    edad '17' = 15 falso.
	
	if(edad == 15)
	{
		alert("Niña Bonita");
	}


}//FIN DE LA FUNCIÓN


 /* CONDICION

  if (condicion) = si la edad ingresada es 15
  {

  muestro niña bonita

  }

  si la edad ingresada es = a 15

  if(edad == 15)

  operador de comparacion

  == es igual a ...

  */