import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
const imgRoutes = require.context("../../assets/productos", true);

const CarritoDetail = (props) => {
  //const { carrito } = props;
  const { carrito } = useContext(CarritoContext);
  return (
    <div className="container text-center">
      {carrito.map(({ id, img, description, precio }, index) => (
        <div className="row g-2">
          <div className="col-8">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="card-img-top imgTamanio img-thumbnail"
                    src={imgRoutes(`${img}`)}
                    alt="remera"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">id</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                      <small className="text-muted">{precio}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CarritoDetail;
