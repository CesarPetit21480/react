import React, { createContext, useState, useEffect } from "react";
import data from "../json/data.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CarritoContext = createContext("");

const CarritoContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [count, setcount] = useState(0);

  const getProduct = () => {
    const getData = new Promise((resolve, reject) => {
      resolve({
        status: 200,
        data: data.productos,
      });
      reject(console.log("error Carga"));
    });

    getData
      .then((resultado) => {
        setDatos(resultado.data);
      })
      .catch((error) => {
        console.log("error Carga", error);
      });
  };

  useEffect(() => {
    getProduct();

    return () => {
      setDatos([]);
    };
  }, []);

  const addCarrito = (id) => {
    const filtrado = datos.filter((data) => data.id === Number(id));

    setCarrito([...carrito, filtrado[0]]);
    setcount(count + 1);
    showToastMessage();
  };

  const showToastMessage = () => {  
    toast.success("Producto Agregado al Carrito!!!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <CarritoContext.Provider
      value={{ datos: datos, carrito: carrito, count, addCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
