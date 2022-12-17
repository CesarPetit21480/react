import React from "react";
import { useState, useEffect } from "react";

const Counter = (props) => {
  const { nombre } = props;
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("el componente esta listo");
    contador > 0
      ? console.log("contador es Mayor")
      : console.log("contador es menor o igual a 0");

      if (contador === 3) alert("HOLA POCHO");
    return () => {
      console.log("el comoponente esta termino");
    };
  }, [
    // cuando hay algun cambio
    contador,
  ]);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <div>
      <h1>{nombre}</h1>
      <h2>El valor del contador es : {contador}</h2>
      <div className="d-flex justify-content-center p-5">
        <button className="btn btn-dark m-2 px-4" onClick={sumar}>
          sumar
        </button>
        <button className="btn btn-dark m-2 px-4" onClick={restar}>
          restar
        </button>
      </div>

      <hr />
    </div>
  );
};

export default Counter;
