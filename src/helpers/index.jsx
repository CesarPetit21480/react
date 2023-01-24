

export const existeEnCarrito = (carrito,id) => {

    console.log("id",id);
    
    console.log("carrito",carrito);

    const existe = carrito.some((p) => p.id === id)

    
    return existe;
}


export const dameTotat = (carrito) => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].cantidad * carrito[i].precio;
    }
    return suma;
  };
  

  export const validarTodoLLeno = (campos) => {
    // let invalid = false;
    // campos.map((campo) => campo === "" ? invalid = true : invalid = false)
    // return invalid
    return campos.some((campo) => campo === "")
  }
  
  