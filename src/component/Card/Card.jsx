import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../json/data.json";

const Card = (props) => {
  const [datos, setDatos] = useState([]);
const {cate} = props;

console.log("la CATEGORIA", cate);
  

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

  const pp = datos.filter((p) => p.categoria === "zapatillas");

  return <div>card</div>;
};

export default Card;
