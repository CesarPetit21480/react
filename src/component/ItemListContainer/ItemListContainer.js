import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useParams } from "react-router-dom";
import data from "../../json/data.json";



const ItemListContainer = (props) => {

const {bienvenida,nombre,descripcion} = props;
const { cat } = useParams();
const [datos, setDatos] = useState([]);

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

  return (
    <div>      
        <h1>{bienvenida}</h1>
        <h2>{nombre}</h2>
        <h2>{descripcion}</h2>
        {
          datos.filter((p) => p.categoria === cat).map(({id,categoria,img,description},index) =>(
            <Card
              key={index}
              id={id}
              categoria={categoria}
              img={img}
              description={description}
            />)
            )}                  
      
    </div>
  )
}

export default ItemListContainer