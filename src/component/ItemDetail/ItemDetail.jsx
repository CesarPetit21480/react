import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./ItemDetail.css";
const imgRoutes = require.context("../../assets/productos", true);

const ItemDetail = (props) => {
  const { producto } = props;
  const { img, description, precio, stock } = producto;
  const [count, setCount] = useState(0);
  const { addCarrito } = useContext(CarritoContext);
  const [btnActivo, setBtnActivo] = useState(false);
  const [hayEstock, sethayEstock] = useState(0);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  const EstaActivo = () => {
    if (stock <= 0) {
      setBtnActivo(true);
      sethayEstock(0);
    } else {
      setBtnActivo(false);
      sethayEstock(stock);
    }
  };

  useEffect(() => {
    EstaActivo();
    return () => {};
  });

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
            <h5 className="card-title">Stock : {hayEstock} </h5>
            <h5 className="card-title">{precio} $</h5>
            <p className="card-text">{description}</p>

            <div className="d-flex justify-content-center">
              <button className="btn btn-dark" onClick={sumar}>
                +
              </button>
              <input className="inpt" type="text" value={count} />
              <button className="btn btn-dark" onClick={restar}>
                -
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              disabled={btnActivo}
              onClick={() => addCarrito(producto, count)}
              className="btn boton"
            >
              Agregar Al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
