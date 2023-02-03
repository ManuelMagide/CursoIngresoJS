/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let centigrados;
    let temperatura;

    temperatura = document.getElementById('txtIdTemperatura').value;

    centigrados = (temperatura- 32) / 1.8; 

    centigrados = parseInt(centigrados);
    temperatura = parseInt(temperatura);

    alert(temperatura + ' Fahrenheit son ' + centigrados + ' centigrados.');
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let temperatura;

    temperatura = document.getElementById('txtIdTemperatura').value;

    fahrenheit = (temperatura * 9 / 5) + 32; 

    temperatura = parseInt(temperatura);
    fahrenheit = parseInt(fahrenheit);

    alert(fahrenheit);
}
