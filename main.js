const productos = [
    {nombre: "Cereales Krusty", precio: 800},
    {nombre: "Buzz Cola", precio: 600},
    {nombre: "Cerveza Duff", precio: 900},
    {nombre: "Squishees", precio: 300},
    {nombre: "Jamon rancio", precio: 1800}
];

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

let validar = prompt("Desea comprar algo si o no?");

while(validar != "si" && validar != "no"){
    alert("Por favor ingresa si o no")
    validar = prompt("Desea comprar algo si o no?");
}

if(validar == "si"){
    alert("genial!!! estos son nuestros productos")
    let productosTotales = productos.map((producto)=> producto.nombre + " " + producto.precio + "$");
    alert(productosTotales.join(" - "))
}else if (validar == "no"){
    alert("Muchas gracias vuelvas prontos!!s")
}

while(validar != "no"){
    let producto = prompt("agrega un producto a tu carrito");
    let precio = 0;

    if(producto == "Cereales Krusty" || producto == "Buzz Cola" || producto == "Cerveza Duff" || producto == "Squishees" || producto == "Jamon rancio"){
        switch(producto){
            case "Buzz Cola":
                precio = 600;
                break;
            case "Cereales Krusty":
                precio = 800;
                break;
            case "Jamon rancio":
                precio = 1800;
                break;
            case "Cerveza Duff":
                precio = 900;
                break;
            case "Squishees":
                precio = 300;
                break;
            default:
                break;
        
            }

            let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))  

            carrito.push({producto, unidades, precio})
            console.log(carrito)
    } else {
        alert("oh!! ese productos no lo tenemos")
    }

    validar = prompt("quiere seguir comprando?")

    while(validar == "no"){
        alert("Muchas gracias vuelva prontos!!");
        carrito.forEach((carritoF)=> {
            console.log(`producto: ${carritoF.producto}, unidades: ${carritoF.unidades}, El total a pagar de los productos ${carritoF.unidades * carritoF.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0);
console.log(`este es el total a pagar: ${total}`)










