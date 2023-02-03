/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let resultado;
    let area;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt (largo);
    ancho = parseInt (ancho);

    area = largo * ancho;

    resultado = area * 3;


    alert(resultado);
}
function Circulo () 
{
    let radio;
    let perimetro;
    let pi;
    let resultado;

    radio = document.getElementById('txtIdRadio').value;

    pi = 3.14;

    radio = parseInt(radio);

    pi = parseInt(pi);

    perimetro = pi * radio * 2;
    resultado = perimetro * 3;

    alert('Se tiene que comprar ' + resultado + ' metros de alambre.')
}
function Materiales () 
{
    
    let largo;
    let ancho;
    let resultado1;
    let resultado;
    let area;
    let cemento;
    let cal;
    let contrapiso;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt (largo);
    ancho = parseInt (ancho);
    cemento = parseInt(cemento);
    cal = parseInt(cal);
    contrapiso = parseInt(contrapiso);

    contrapiso = 1 * 1;
    cemento = 2 * contrapiso;
    cal = 3 * contrapiso;

    area = largo * ancho;

    resultado1 = area * cal;
    resultado = area * cemento;

    alert('Son ' + resultado + ' bolsas de cemento y ' + resultado1 + ' de cal');
	
}