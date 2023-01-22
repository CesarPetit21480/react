import React, { createContext, useState, useEffect } from "react";
import data from "../json/data.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { existeEnCarrito } from "../helpers";

export const CarritoContext = createContext("");

const CarritoContextProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [contCarrito, setContCarrito] = useState(0)


  const addCarrito = (prod, cant) => {


    if (existeEnCarrito(carrito,prod.id))
    {
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

  const agregoCarrito = ( producto, cant) => {
    const Nuevacompra = {
      id: producto.id,
      categoria: producto.categoria,
      img: producto.img,
      description: producto.description,
      precio: producto.precio,
      cantidad: cant,
    };
    const existe = carrito.some((p, index) => p.id === producto.id);

    if (!existe) {
      setCarrito([...carrito, Nuevacompra]);
      setContCarrito(contCarrito + 1);
    } else {
      const indice = carrito.findIndex((p) => p.id === producto.id);
      let copia = carrito;
      copia[indice].cantidad = copia[indice].cantidad + cant;   
      setCarrito([...copia]);
    }
  };
  const showToastMessage = () => {
    toast.success("Producto Agregado al Carrito!!!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <CarritoContext.Provider
      value={{ carrito: carrito, contCarrito, addCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
