
const productosDisponibles = [
  { nombre: "tierra", precio: 100 },
  { nombre: "macetas", precio: 50 },
  { nombre: "fertilizantes", precio: 200 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}


function mostrarMensaje(mensaje) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
  setTimeout(() => {
    mensajeDiv.textContent = ''; 
  }, 3000);
}


function mostrarCarrito() {
  const listaProductos = document.getElementById('listaProductos');
  const totalCarritoElem = document.getElementById('totalCarrito');
  listaProductos.innerHTML = ''; 


  const total = carrito.reduce((acum, producto) => acum + producto.precio, 0);


  carrito.map((producto, index) => {
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} - $${producto.precio}`;


    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarProducto(index);

    item.appendChild(botonEliminar);
    listaProductos.appendChild(item);
  });


  totalCarritoElem.textContent = total;
}


function agregarProducto() {
  const productoSelect = document.getElementById('producto');
  const nombreProducto = productoSelect.value;


  const producto = productosDisponibles.find(p => p.nombre === nombreProducto);

  if (producto) {

    const productoExistente = carrito.find(p => p.nombre === producto.nombre);
    
    if (productoExistente) {
      mostrarMensaje('Este producto ya está en el carrito.');
    } else {

      carrito.push({ nombre: producto.nombre, precio: producto.precio });
      guardarCarrito();
      mostrarCarrito();
      mostrarMensaje('Producto agregado al carrito.'); 
    }
  } else {
    mostrarMensaje('Producto no encontrado.');
  }
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
  mostrarMensaje('Producto eliminado del carrito.'); 
}


document.getElementById('agregarProducto').addEventListener('click', agregarProducto);


window.addEventListener('load', mostrarCarrito);
