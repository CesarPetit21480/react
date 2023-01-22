

export const existeEnCarrito = (carrito,id) => {

    console.log("id",id);
    
    console.log("carrito",carrito);

    const existe = carrito.some((p) => p.id === id)

    
    return existe;
}


