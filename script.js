const productos = [
  { id: 1, nombre: "Cultivos Primerizos", precio: 50, imagen: "../Imagenes/cultivos primerizos.png" },
  { id: 2, nombre: "Plagas", precio: 100, imagen: "../Imagenes/fertilizantes.png" },
  { id: 3, nombre: "Genéticas", precio: 120, imagen: "../Imagenes/geneticas.png" },
  { id: 4, nombre: "Productos Cultivo", precio: 150, imagen: "../Imagenes/productos de cultivo.png" },
  { id: 5, nombre: "Aceites", precio: 80, imagen: "../Imagenes/aceites.png" },
  { id: 6, nombre: "Salas de Cultivo", precio: 850, imagen: "../Imagenes/armado de salas.png" },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productosContainer = document.getElementById("productos");

function mostrarProductos() {
  productosContainer.innerHTML = ""; 
  productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("card", "m-2", "p-2", "text-center");
    productoDiv.style.width = "18rem"; 
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <button class="btn btn-success agregar-carrito" 
                data-id="${producto.id}" 
                data-nombre="${producto.nombre}" 
                data-precio="${producto.precio}">
          Agregar al Carrito
        </button>
      </div>
    `;

    productosContainer.appendChild(productoDiv);
  });
  agregarEventosCarrito(); 
}

function agregarEventosCarrito() {
  document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const nombre = e.target.getAttribute("data-nombre");
      const precio = parseFloat(e.target.getAttribute("data-precio"));


      carrito.push({ id, nombre, precio });

      localStorage.setItem("carrito", JSON.stringify(carrito));

      actualizarCarrito();
    });
  });
}


function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total");


  listaCarrito.innerHTML = "";


  let total = 0;
  carrito.forEach((item, index) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = `${item.nombre} - $${item.precio}`;
    itemLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");


    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
    btnEliminar.addEventListener("click", () => {
      eliminarProducto(index);
    });

    itemLi.appendChild(btnEliminar);
    listaCarrito.appendChild(itemLi);
    total += item.precio;
  });

  totalCarrito.textContent = `$${total}`;
}

function eliminarProducto(index) {
  carrito.splice(index, 1); 
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}


document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = []; 
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
});

mostrarProductos();
actualizarCarrito();