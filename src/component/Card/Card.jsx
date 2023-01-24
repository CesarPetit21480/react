// import { Link } from "react-router-dom";
import "./Cards.scss";
import React, { useContext,useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
const imgRoutes = require.context("../../assets/productos", true);

const Card = (props) => {
  const { id, img, description, precio,stock} = props;
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
          className="card-img-top imgTamanio"
          src={imgRoutes(`${img}`)}
          alt="remera"
        />
        <div className="card-body d-flex flex-column align-items-center bodyPropio">
          <h5 className="card-title">{precio} $</h5>
          <h5 className="card-text descripcion">{description}</h5>
          <h5 className="card-text descripcion">Stock: {stock}</h5>
        </div>

        <div className="d-flex justify-content-center mt-1 ">
          <Link to={`/item/detail/${id}`} className="btn boton">
            VER DETALLE
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Card;
