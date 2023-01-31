/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() //EL RESTO ES CON --> %
{
	let dividendo;
	let divisor;
	let resultado;

	dividendo = document.getElementById('txtIdNumeroDividendo').value;
	divisor = document.getElementById('txtIdNumeroDivisor').value;

	//siempre cambiar el nombre del parseInt
	numeroDividido = parseInt(dividendo);
	numeroDivisor = parseInt(divisor);

	resultado = numeroDividido % numeroDivisor

	alert("El resto es " + resultado);
}
//txtIdNumeroDividendo