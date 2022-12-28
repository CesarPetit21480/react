import { Link } from "react-router-dom";
import "./Card.css";

const imgRoutes = require.context("../../assets/productos", true);

const Card = (props) => {

  const { id, img, description, precio } = props;

  return (
    <div>
      <div className="card cardPropio">
        <img
          className="card-img-top imgTamanio img-thumbnail"
          src={imgRoutes(`${img}`)}
          alt="remera"
        />
        <div className="card-body">
          <h5 className="card-title">{precio} $</h5>
          <p className="card-text">{description}</p>
          <Link to={`/item/detail/${id}`} className="btn btn-dark btnPropio">SELECCIONAR</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
