/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;


	numeroUno = document.getElementById('txtIdNumeroUno').value;

	numeroDos = document.getElementById('txtIdNumeroDos').value;

	// En el parseInt pasamos el numero a decimal aproximado y hacemos numeros.
	num1 = parseInt(numeroUno)

	num2 = parseInt(numeroDos)

	resultado = num1 + num2

	alert ('la suma es '+ resultado);
}

// txtIdNumeroUno txtIdNumeroDos