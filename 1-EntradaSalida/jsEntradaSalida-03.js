/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	
	// Opcion 1
	//nombreIngresado=txtIdNombre.value;

	// Opcion 2 mas segura
	// LO DE LA DERECHA ES ASIGNADO A LO DE LA IZQUIERDA
	nombreIngresado = document.getElementById('txtIdNombre').value;

	// Mostrar por alert
	alert(nombreIngresado);

}

// txtIdNombre
