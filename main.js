const limpiadores = [
    {id: 1, nombre: "Gentle Milk Cleanser", cantidad: 190, descripcion: "Leche limpiadora suavizante", precio: 2900, codigo: 10058},
    {id: 2, nombre: "Alpine Roses Cleanser Emulsion", cantidad: 100, descripcion: "Suave microemulsion de limpieza que desmaquilla y limpia con rapidez", precio: 2850, codigo: 19198},
    {id: 3, nombre: "Vitamin C Cleanser", cantidad: 180, descripcion: "Gel limpiador espumante para rostro y cuerpo", precio: 2140, codigo: 12601},
    {id: 4, nombre: "Gentle Milk Cleanser REFILL", cantidad: 175, descripcion: "Leche limpiadora suavizante", precio: 2330, codigo: 10323},
]

let total = 0

const suma = (a, b) => a + b;
const iva = x => x * 0.21;

function sumarProducto(precio){
    total = suma(suma(precio, iva(precio)), total) ;
    alert(`Total de la compra $${total}`);
}

function calcularCuotas(cuotas){
    cadaCuota = total / cuotas;
    alert(`Debera pagar ${cuotas} cuotas de $${cadaCuota}`)
}


let nombreUsuario = prompt("Ingrese su nombre");
while(nombreUsuario === ""){
    alert("Debe ingresar su nombre");
    nombreUsuario = prompt("Ingrese su nombre")
}

let edadUsuario = parseInt(prompt("Ingrese su edad"));

if (edadUsuario < 18) {
        alert("Sos menor de edad! No podes ingresar a la tienda.");
}else{
    let mensajeBienvenida = `Bienvenido/a ${nombreUsuario} a la tienda de Bendita`
    alert(mensajeBienvenida)
    

let mensaje1 = prompt(`${nombreUsuario}, desea comprar un producto? (si/no)`);

while(mensaje1.toLowerCase() === "si"){
    let producto = prompt("1-Limpiadores\n2-Esponjas\n3-Exfoliantes\n4-Micelares\n5-Lociones y Brumas\n6-Hidratacion Termal");
    switch(producto){
        case '1':
            limpiadores.forEach((item) => {
                let mensaje = `
                ID: ${item.id}
                Nombre: ${item.nombre}
                Cantidad: ${item.cantidad}
                Descripcion: ${item.descripcion}
                Precio: ${item.precio}
                Codigo: ${item.codigo}
                `;
                alert(mensaje);
            })
            let eleccion = parseInt(prompt("Que producto desea comprar?"));
            switch(eleccion){
                case 1:
                    alert(`Agregaste al carro ${limpiadores[0].nombre}: $${limpiadores[0].precio} (sin iva)`);
                    sumarProducto(limpiadores[0].precio);
                    break;
                case 2:
                    alert(`Agregaste al carro ${limpiadores[1].nombre}: $${limpiadores[1].precio} (sin iva)`);
                    sumarProducto(limpiadores[1].precio);
                    break;
                default:
                    alert("Producto inexistente");
                    break;
            }
            break;
        case '2':
            alert("Agregaste al carro 'Esponjas': $1.500 (sin iva)");
            sumarproducto(1500); //1815 (con iva)
            break;
        case '3':
            alert("Agregaste al carro 'Exfoliantes': $2.700 (sin iva)");
            sumarproducto(2700);
            break;
        case '4':
            alert("Agregaste al carro 'Micelares': $2.000 (sin iva)");
            sumarproducto(2000);
            break;
        case '5':
            alert("Agregaste al carro 'Lociones y Brumas': $3.000 (sin iva)");
            sumarproducto(3000);
            break;
        case '6':
            alert("Agregaste al carro 'Hidratacion Termal': $3.000 (sin iva)");
            sumarproducto(3000);
            break;
        default:
            alert("Producto inexistente");
            break;
    }
    mensaje1 = prompt("Desea comprar otro producto? (si/no)");
}

let mensaje2 = alert(`${nombreUsuario}, como desea abonar?`);
let pago = prompt("1-Tarjeta de Credito\n2-Tarjeta de Debito\n3-Transferencia");
switch(pago){
    case '1':
        let cuotas = parseInt(prompt("En cuantas cuotas desea realizar el pago?"));
        calcularCuotas(cuotas);
        break;
    case '2':
        alert("Seras redireccionado para abonar");
        break;
    case '3':
        alert("A continuacion se te daran los datos para efectuar la transferencia:");
        alert(`alias: bendita.cb.mp - CVU:000000123321654987 - monto a transferir: $${total}`);
        break;
    default:
        alert("Metodo de pago inexistente");
        break;
}

alert("Gracias por comprar en Bendita❣")

}

