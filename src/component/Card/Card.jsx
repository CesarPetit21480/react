import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../json/data.json";

const Card = () => {
  const { categoria } = useParams;
  const [datos, setDatos] = useState([]);

  // async function getData() {
  //   try {
  //     // const result = await axios.get(data);     
  //     await setDatos(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // getData();

useEffect(() => {

    setDatos(data.productos);

  return () => {

  }
}, [])

console.log(datos);


const pp = datos.filter(p => p.id === 1)

console.log('hola',pp)






  // const getProduct = () => {
  //   const getData = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         status: 200,
  //         data: data.productos,
  //       });
  //     }, 1000);
  //   });
  // };

  // const p1 = new producto(1,"pantalon","shor","img");

  const { cards, setcards } = useState([]);
  // setcards(p1);
  // console.log(cards);

  return <div>card</div>;
};

export default Card;
