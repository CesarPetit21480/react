import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../json/data.json";
import ItemDetail from "../ItemDetail/ItemDetail";
const imgRoutes = require.context("../../assets/productos", true);

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const getProduct = () => {
    const getData = new Promise((resolve, reject) => {
      resolve({
        status: 200,
        data: data.productos,
      });
      //reject(console.log("error Carga"));
    });

    getData
      .then((resultado) => {
        const filtrado = resultado.data.filter((data) => data.id === Number(id));      
        console.log(filtrado)
        setItem(filtrado[0]);
      })
      .catch((error) => {
        console.log("error Carga", error);
      });
  };

  useEffect(() => {
    getProduct();

    return () => {
      setItem([]);
    };
  }, []);


  return <div>{item ? <ItemDetail item={item} /> : <h1>Cargando...</h1>}</div>;

};

export default ItemDetailContainer;
