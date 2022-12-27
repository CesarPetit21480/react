import React,{createContext, useState} from 'react'
import data from "../json/data.json";
import {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const CarritoContext = createContext('')

const CarritoContextProvider   = ({children})   => {

  const [datos, setDatos] = useState([]);

  const [carrito, setCarrito] = useState([]);
  const [count, setcount] = useState(0);

  const addCarrito = (item) => {
    setCarrito([...carrito, item]);
    setcount(count + 1);
    showToastMessage();
  
  };

  const showToastMessage = () => {
    console.log('showToastMessage');
    
    toast.success('Producto Agregado al Carrito!!!', {     
      position: toast.POSITION.BOTTOM_RIGHT,
    });
};



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

getProduct();
  
  // useEffect(() => {
  //   getProduct();

  //   return () => {
  //     setItem([]);
  //   };
  // }, []);
  
console.log('datos context', datos);




  return (
    <CarritoContext.Provider value={{datos:datos,carrito:carrito,addCarrito,ToastContainer}}>CarritoContext
     {children}  
    </CarritoContext.Provider>
  )
}

export default CarritoContextProvider 