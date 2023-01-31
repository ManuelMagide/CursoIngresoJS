/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato;

	// PRIMERO PROMPT
	dato = prompt ('Ingrese su nombre');

	// LO DE LA DERECHA ESTA ASIGNADO A LO Q SE ENCUENTRA A LA IZQUIERDA, ES DECIR, SE MUESTRA LO DE LA DERECHA.
	// mostrar un dato
	document.getElementById('txtIdNombre').value = dato

	// LO DE LA DERECHA ES ASIGNADO A LO DE LA IZQUIERDA
	// tomar un dato
	// dato = document.getElementById('txtIdNombre').value;

}

//txtIdNombre