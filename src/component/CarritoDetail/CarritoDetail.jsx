import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CarritoDetail.scss";
import { CarritoContext } from "../../context/CarritoContext";
import Formulario from "../Formulario/Formulario";
import { dameTotat } from "../../helpers";
import CarritoElement from "../CarritoElement/CarritoElement";
const imgRoutes = require.context("../../assets/productos", true);


const CarritoDetail = () => {
  const { carrito } = useContext(CarritoContext); 

  return (
    <div className="container-fluid">

      {carrito.length > 0 ? (   
      <div className="container border m-lg-5 ">
          <div className="row">
            <div className="container col col-12 col-md-6 my-4 py-2 container-scroll">
              {carrito.map((item, index) => (
                  <CarritoElement key={index} item={item}  />
              ))}
            </div>
            <div className="col col-12 col-md-6 py-2 my-4">
              { <Formulario total={dameTotat(carrito)} compra={carrito} /> }
            </div>
          </div>
        </div>) : undefined}
  
        {carrito.length < 1 && (
        <div className="container full-height d-flex align-items-center justify-content-center ">
          <div className="w-50">
            <h3 className="text-center text-uppercase">
              el carrito esta vacio
            </h3>

            <div className="my-5 d-flex">
              <Link to="/" className="btn btn-primary w-100 text-uppercase">
                volver a comprar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CarritoDetail;
