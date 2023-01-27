import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = (props) => {
  const { bienvenida, nombre, descripcion } = props;
  const { data, getProductos } = useFirebase();
  const { cat } = useParams();

  const desc = !descripcion ? cat : descripcion;
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container">
      {/* <h1>{bienvenida}</h1>
      <h2>{nombre}</h2>
      <h2>{desc.toUpperCase()} </h2> */}
      <div className="d-flex justify-content-center flex-wrap">
        {(cat ? data.filter((p) => p.categoria === cat) : data).map(
          ({ id, img, description, precio, stock }, index) => (
            <Card
              key={index}
              id={id}
              img={img}
              description={description}
              precio={precio}
              stock={stock < 0 ? 'SIN STOCK' : stock}
            />
          )
        )}
      </div>
    </div>
  )
};

export default ItemListContainer;
