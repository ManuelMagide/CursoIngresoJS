/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	//txtIdNombre.value = nombre;
	//txtIdNombre.value = edad;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;

    // El + une texto (los concatena)
	alert('Usted se llama ' + nombre + ' y tiene ' + edad + 'años')
}

