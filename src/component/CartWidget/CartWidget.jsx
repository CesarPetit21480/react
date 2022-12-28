import React, { useContext } from "react";
import carro from "../../images/carritoNew.png";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {
  const { count } = useContext(CarritoContext);

  return (
    <div className="d-flex">
      <Link to={`/carrito/detail`}>
        {" "}
        <img className="tamanio" src={carro} alt="carrito" />{" "}
      </Link>
      <h5 className="color">{count}</h5>
    </div>
  );
};

export default CartWidget;
