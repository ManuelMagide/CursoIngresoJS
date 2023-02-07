/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidad;
    let marca;
    let precioCantidad;
    let precio;
    let descuento;
    let ingresosBrutos;
    let precioFinal;

    marca = document.getElementById('Marca').value;
    cantidad = document.getElementById('txtIdCantidad').value;

    cantidad = parseInt(cantidad);

    precioCantidad = cantidad * 35;

    ingresosBrutos = precioCantidad * 10 / 100;

    precioFinal = precioCantidad + ingresosBrutos;

    if (cantidad >= 6) {

        //precio = precioCantidad / 2;
        descuento = 0.50;
    }
    else {
        if (cantidad == 5 && marca == 'ArgentinaLuz') {

            //precio = precioCantidad * 40 / 100;
            descuento = 0.60;

        } else {

            if (cantidad == 5 && marca != 'Argentina luz') {

                //precio = precioCantidad * 30 / 100;
                descuento = 0.70;

            } else {

                if (cantidad == 4 && marca == 'ArgentinaLuz') {

                    //precio = precioCantidad * 25 / 100;
                    descuento = 0.75;

                } else {
                    if (cantidad == 4 && marca == 'FelipeLamparas') {

                        descuento = 0.75;

                    } else {

                        if (cantidad == 4 && marca != 'ArgentinaLuz' && marca != 'FelipeLamparas') {

                            //precio = precioCantidad * 20 / 100;
                            descuento = 0.80;

                        } else {

                            if (cantidad == 3 && marca == 'ArgentinaLuz') {

                                descuento = 0.85;

                            } else {

                                if (cantidad == 3 && marca == 'FelipeLamparas') {

                                    descuento = 0.90;

                                } else {

                                    if (cantidad == 3 && marca != 'ArgetinaLuz' && marca != 'FelipeLamparas') {

                                        descuento = 0.95;

                                    } else {

                                        descuento = 1;

                                    }
                                }
                            }
                        }

                    }
                }

            }
        }
    }

    precio = precioCantidad * descuento;

    document.getElementById('txtIdprecioDescuento').value = precio;

    if (precio >= 120) {

        precio = precioFinal;

        alert('Usted pago ' + precio + ' de IIBB');
    }
}

/* txtIdCantidad  txtIdprecioDescuento */