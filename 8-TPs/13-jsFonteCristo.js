/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
// Definimos los objetos para cada bodega
const avellaneda = {
    nombre: 'Avellaneda',
    capacidadMaxima: 20000,
    pesoActual: 0,
    productos: []
  }
  
  const caba = {
    nombre: 'CABA',
    capacidadMaxima: 25000,
    pesoActual: 0,
    productos: []
  }
  
  const lanus = {
    nombre: 'Lanus',
    capacidadMaxima: 15000,
    pesoActual: 0,
    productos: []
  }
  
  // Función para ingresar un producto a una bodega
  function ingresarProducto(bodega, descripcion, peso) {
    // Verificamos si la bodega tiene suficiente capacidad para el nuevo producto
    if (bodega.pesoActual + peso > bodega.capacidadMaxima) {
      console.log(`La bodega ${bodega.nombre} no tiene suficiente capacidad para almacenar este producto.`)
      return
    }
    
    // Agregamos el producto a la lista de productos de la bodega
    bodega.productos.push({ descripcion, peso })
    
    // Actualizamos el peso actual de la bodega
    bodega.pesoActual += peso
    
    console.log(`Se ingresó el producto "${descripcion}" con un peso de ${peso} kg en la bodega ${bodega.nombre}.`)
  }
  
  // Ejemplo de uso: ingresamos algunos productos a las bodegas
  ingresarProducto(avellaneda, 'Caja de herramientas', 5000)
  ingresarProducto(caba, 'Pinturas', 10000)
  ingresarProducto(lanus, 'Cajas de libros', 6000)
  ingresarProducto(avellaneda, 'Bolsas de cemento', 8000)
  ingresarProducto(lanus, 'Cajas de ropa', 5000)
  ingresarProducto(caba, 'Baldes de pintura', 3000)
  
  // Función para calcular el producto con mayor peso y el promedio de peso en cada bodega
  function calcularEstadisticasBodegas(bodegas) {
    let productoMasPesado = null
    let pesoMasPesado = 0
    
    for (const bodega of bodegas) {
      // Calculamos el promedio de peso en la bodega
      const cantidadProductos = bodega.productos.length
      const pesoPromedio = cantidadProductos > 0 ? bodega.pesoActual / cantidadProductos : 0
      
      console.log(`La bodega ${bodega.nombre} tiene un promedio de peso de ${pesoPromedio.toFixed(2)} kg por producto.`)
      
      // Verificamos si esta bodega tiene el producto más pesado
      for (const producto of bodega.productos) {
        if (producto.peso > pesoMasPesado) {
          pesoMasPesado = producto.peso
          productoMasPesado = { descripcion: producto.descripcion, peso: pesoMasPesado }
        }
      }
    }
    
    console.log(`El producto más pesado es "${productoMasPesado.descripcion}" con un peso de ${productoMasPesado.peso} kg.`)
  }
  
  // Ejemplo de uso: calculamos las estadísticas de las bodegas
