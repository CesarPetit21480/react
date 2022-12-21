import React, { useState } from "react";
import "./ItemDetail.css";

const imgRoutes = require.context("../../assets/productos", true);

const ItemDetail = (props) => {
<<<<<<< HEAD
  const { item,addCarrito } = props;
  const { categoria, img, description, precio } = item;
=======
  const { item } = props;
  const { img, description, precio } = item;
>>>>>>> d63f231d7bc4e474dbc91b3789cc166166a75612
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h1>ELEMENTO SELECCIONADO</h1>
      <div className="d-flex justify-content-center">
        <div className="card cardPropio ">
          <img
            className="card-img-top imgTamanio img-thumbnail"
            src={imgRoutes(`${img}`)}
            alt="remera"
          />
          <div className="card-body">
            <h5 className="card-title">{precio} $</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-dark" onClick={sumar}>
              +
            </button>
            <input className="inpt" type="text" value={count} />
            <button className="btn btn-dark" onClick={restar}>
              -
            </button>
          </div>
          <div>
            <button onClick={addCarrito} className="btn btn-dark">Agregar Al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
