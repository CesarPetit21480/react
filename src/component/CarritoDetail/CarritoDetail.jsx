import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
const imgRoutes = require.context("../../assets/productos", true);

const CarritoDetail = (props) => {
  const { carrito } = useContext(CarritoContext);
  return (
    <div className="container text-center mt-3">
      {carrito.map(
        ({ id, categoria, img, description, precio, cantidad }, index) => (
          <div className="row g-2">
            <div className="col-8">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      className="card-img-top imgTamanio img-thumbnail mb-4 ms-3"
                      src={imgRoutes(`${img}`)}
                      alt="remera"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-text">{description}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Precio Unitario: {precio}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Cantidad Seleccionada: {cantidad}
                        </small>
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
        )
      )}
    </div>
  );
};
export default CarritoDetail;
