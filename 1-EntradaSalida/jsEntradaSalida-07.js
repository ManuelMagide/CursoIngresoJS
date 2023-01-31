/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
    let numeroDos;
    let resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(numeroUno);
	num2 = parseInt(numeroDos);

	resultado = num1 + num2

	alert("La suma es " + resultado);	
}

function restar()
{
	let numeroUno;
    let numeroDos;
    let resultado;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(numeroUno);
	num2 = parseInt(numeroDos);

	resultado = num1 - num2

	alert("La resta es " + resultado);

	
}

function multiplicar() // LA MULTIPLICACION ES --> *
{ 	
	let numeroUno;
    let numeroDos;
    let resultado;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(numeroUno);
	num2 = parseInt(numeroDos);

	resultado = num1 * num2

	alert("La multiplicacion es " + resultado);

	
}

function dividir() //LA DIVISION ES --> /
{
	let numeroUno;
    let numeroDos;
    let resultado;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(numeroUno);
	num2 = parseInt(numeroDos);

	resultado = num1 / num2

	alert("La division es " + resultado);

	
}

// txtIdNumeroUno txtIdNumeroDos