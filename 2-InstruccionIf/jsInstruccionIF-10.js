/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;
	
	numeroRandom = Math.floor(Math.random (1) * 11);

	alert(numeroRandom);

	if (numeroRandom >= 9)
	{
		alert('EXCELENTE POLLITO.');
	} 
	else 
	{
		if (numeroRandom <=8 && numeroRandom >=4)

		{
			alert('APROBÓ.');
		}
		else
		{
			alert('Vamos, la proxima se puede');
		}
	}

}//FIN DE LA FUNCIÓN