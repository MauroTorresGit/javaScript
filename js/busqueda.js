const celulares = [
    {nombre: 'iPhone 13 pro max', precio: 680},
    {nombre: 'iPhone 14', precio: 700},
    {nombre: 'iPhone 14 pro', precio: 750},
    {nombre: 'iPhone 14 pro max', precio: 800},
    {nombre: 'iPhone 15', precio: 900},
    {nombre: 'iPhone 15 pro max', precio: 1100},
    {nombre: 'Samsung S20', precio: 500},
    {nombre: 'Samsung S21', precio: 700},
    {nombre: 'Samsung S22', precio: 900},
    {nombre: 'Samsung S23', precio: 1200},
    
]

const precioMaximo800 = celulares.filter(celulares => celulares.precio <= 800);
console.log (precioMaximo800);

function normalizarNombre(nombre) {
    return nombre.toLowerCase().split(' ').sort().join(' ');
}

const celularBuscado = prompt("¿Qué celular desea buscar?");

const celularEncontrado = celulares.find(celular => normalizarNombre(celular.nombre) === normalizarNombre(celularBuscado));
console.log (celularEncontrado);

if (celularEncontrado)
    {
        alert (`Nombre: ${celularEncontrado.nombre}, Precio: ${celularEncontrado.precio}`);
    }
    else {
        alert ("Este celular no esta disponible");
    }


