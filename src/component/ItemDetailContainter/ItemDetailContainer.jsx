import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useFirebase from "../../hooks/useFirebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { producto, getProducto } = useFirebase();

  useEffect(() => {
    getProducto({id})  
}, [])

  return (
    <div>
     {producto.id ? <ItemDetail producto={producto} /> : <h1>Cargando...</h1>}
   
    
    </div>
  );
};

export default ItemDetailContainer;



