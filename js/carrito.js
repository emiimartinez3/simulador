const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Productos</h1>`;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("button");
    modalButton.innerHTML= `<i class='bx bx-x'></i>`;
    modalButton.className = "modal-button";

    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio}</p>
        <p>Cantidad: ${product.cantidad}
        <p>Total: ${product.cantidad * product.precio}</p>`;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("button");
        eliminar.innerHTML = `<i class='bx bx-x'></i>`;
        eliminar.className = "eliminar-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad , 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `<h3>total a pagar: ${total} </h3>`;
    modalContainer.append(totalCompra);  
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const findId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== findId;
    });
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length
}