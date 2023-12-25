let seleccion = prompt("Hola desea comprar algun producto, si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola desea comprar algo, Si o No")
}
if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
}else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto")
}


class Producto {
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const Producto1 = new Producto ("Teclado", 72999, "https://www.megatone.net/images//Articulos/zoom2x/371/MKT0856EBX-1.jpg")
const Producto2 = new Producto ("Mouse", 44999, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAU4G7NvihQWysAymBezs9WL9S93zObgEvfA")
const Producto3 = new Producto ("Gabinete", 159999, "https://http2.mlstatic.com/D_NQ_NP_755543-MLA31236125379_062019-O.webp")
const Producto4 = new Producto ("Ram", 119999, "https://http2.mlstatic.com/D_NQ_NP_802470-MLA47962938028_102021-O.webp")
const Producto5 = new Producto ("Motherboard", 391999, "https://http2.mlstatic.com/D_NQ_NP_831851-MLU70065030389_062023-O.webp")
const Producto6 = new Producto ("Placa", 308599, "https://www.comeros.com.ar/wp-content/uploads/2020/11/Comeros-EVGA-24G-P5-3987-KR-1.jpg")
const Producto7 = new Producto ("Procesador", 239999, "https://mla-s1-p.mlstatic.com/835553-MLA51325236484_082022-F.jpg")

const arrayProductos = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6, Producto7]

const productos = document.getElementById("productos");

arrayProductos.forEach(producto =>{
    const div = document.createElement("div")

    div.className = "card"

    div.innerHTML =`
            <img class= "card-img" src="${producto.img}">
            <div>
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button>Comprar</button>
        </div>
`;

    productos.appendChild(div);
})