const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito"); 


let carrito = [];

function nombreUsuario(){
    for (let i = 0; i < 99; i++) {
  
        let usuario = prompt("Ingrese su nombre de usuario");
    
        if(usuario == ""){
            alert("No ingreso su nombre de usuario!!!")
            usuario;
        }else{
            alert(`Bienvenido ${usuario} al Kwik-E-Mart!`);
            break;
        }
    
    }    
};

nombreUsuario();

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$ ${product.precio}</p>
    `;

    shopContent.append(content);
     
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", ()=>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            });
        }
        console.log(carrito);
        carritoCounter();
    });
});










