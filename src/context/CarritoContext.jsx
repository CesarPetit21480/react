import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { existeEnCarrito } from "../helpers";
import useFirebase from "../hooks/useFirebase";
export const CarritoContext = createContext();

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const { updateProducto } = useFirebase();

  const addCarrito = (prod, cant) => {
    if (existeEnCarrito(carrito, prod.id)) {
      Swal.fire("Ya cargo el producto en el carrito");
      return;
    }

    if (cant === 0) {
      Swal.fire("Debe Selecionar al Menos un elemento");
      return;
    }
    agregoCarrito(prod, cant);
    showToastMessage();

  };

  const quitarDelCarrito = (id, cantidad, stock) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    updateProducto(id, stock);
  };

  const limpioElCarrito = () => {
    setCarrito([]);
  };

  const agregoCarrito = (producto, cant) => {
    const Nuevacompra = {
      id: producto.id,
      categoria: producto.categoria,
      img: producto.img,
      description: producto.description,
      precio: producto.precio,
      cantidad: cant,
      stock: producto.stock,
    };
    setCarrito([...carrito, Nuevacompra]);
    const stockActualizado = parseInt(producto.stock) - cant;
    updateProducto(producto.id, stockActualizado);    

  };
  const showToastMessage = () => {
    toast.success("Producto Agregado al Carrito!!!", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito: carrito,
        addCarrito,
        limpioElCarrito,
        quitarDelCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
