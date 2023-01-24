import React, { useContext,useEffect } from "react";
import carro from "../../images/carritoNew.png";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);


  return (
    <div className="d-flex">
      <Link to={`/carrito/detail`}>
        {" "}
        <img className="tamanio" src={carro} alt="carrito" />{" "}
      </Link>
      <h5 className="color">{carrito.length}</h5>
    </div>
  );
};

export default CartWidget;
