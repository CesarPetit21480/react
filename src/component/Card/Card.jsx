import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { id, categoria, img, description } = props;


  console.log("categoria card", categoria, img, description);

 
  return (
    <div class="d-flex justify-content-center">
      <Link class="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{categoria}</h5>
          <p className="card-text">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
