/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado; 

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert (resultado);
	
}
function Promedio () 
{
    
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado; 
    let promedio;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    promedio = precioUno + precioDos + precioTres;

    resultado = promedio / 3;

    alert (resultado);
	
}
function PrecioFinal () 
{
    
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let resultadoTotal;
    let iva;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    resultado = precioUno + precioDos + precioTres;

    iva = resultado * 21 / 100;

    resultadoTotal = resultado + iva;

    alert (resultadoTotal);
	
}