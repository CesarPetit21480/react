// import { Link } from "react-router-dom";
import "./Card.css";
import React, { useContext,useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const imgRoutes = require.context("../../assets/productos", true);

const Card = (props) => {
  const { id, img, description, precio } = props;
  const { addCarrito } = useContext(CarritoContext);

  const [countItem, setCountItem] = useState(0);

  const sumar = () => {
    setCountItem(countItem + 1);
  };
  const restar = () => {
    if (countItem > 0) setCountItem(countItem - 1);
  };

  return (
    <div>
      <div className="card cardPropio">
        <img
          className="card-img-top imgTamanio img-thumbnail"
          src={imgRoutes(`${img}`)}
          alt="remera"
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{precio} $</h5>
          <p className="card-text descripcion">{description}</p>
        </div>
        {/* <div className="d-flex justify-content-center">
          <Link to={`/item/detail/${id}`} className="btn btn-dark btnPropio">
            SELECCIONAR
          </Link>
        </div> */}
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" onClick={sumar}>
            +
          </button>
          <input className="inpt" type="text" value={countItem} />
          <button className="btn btn-dark" onClick={restar}>
            -
          </button>
        </div>       

        <div className="d-flex justify-content-center mt-2">
          <button onClick={() => addCarrito(id)} className="btn btn-dark">
            Agregar Al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
