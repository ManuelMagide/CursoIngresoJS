/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por 
ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edad;
	let sexo;
	let estadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;

	edad = prompt('Ingrese su edad');
	edad = parseInt(edad);
	while (edad < 18 || edad > 90 || isNaN (edad)) {
		edad = prompt('Error!! Ingrese una edad valida');
		edad = parseInt(edad);
	}

	sexo = prompt('Ingrese su sexo (F o M)').toUpperCase();
	while (sexo != 'F' && sexo != 'M') {
		sexo = prompt('Error!! Ingrese un sexo valido (F o M)').toUpperCase();
	}

	estadoCivil = prompt('Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)');
	estadoCivil = parseInt(estadoCivil);
	while (estadoCivil < 1 || estadoCivil > 4 || isNaN (estadoCivil)) {
		estadoCivil = prompt('Error!! Ingrese un estado civil valido');
		estadoCivil = parseInt(estadoCivil);
	}

	sueldo = prompt('Ingrese su sueldo');
	sueldo = parseInt(sueldo);
	while (sueldo < 8000 || isNaN (sueldo)) {
		sueldo = prompt('Error!! Ingrese un sueldo valido');
		sueldo = parseInt(sueldo);
	}

	legajo = prompt('Ingrese su legajo');
	legajo = parseInt (legajo);
	while (legajo < 1000 || isNaN (legajo)) {
		legajo = prompt('Error!! Ingrese un legajo valido');
		legajo = parseInt (legajo);
	}

	nacionalidad = prompt('Ingrese su nacionalidad siendo: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.').toUpperCase();
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
		nacionalidad = prompt('Error!! Ingrese una nacionalidad valida siendo: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.').toUpperCase();
	}

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldo;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
