import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import Swal from "sweetalert2";
import { validarTodoLLeno } from "../../helpers";
import { CarritoContext } from "../../context/CarritoContext";

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName} //{`form-control ${error.nombre && "is-invalid"}`}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
      )}
    </div>
  );
};

const Formulario = ({ total, compra }) => {
  const { limpioElCarrito } = useContext(CarritoContext);
  const { generarTicket, ticket } = useFirebase();

  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
    },
    total: total,
    items: compra,
  });

  const [error, setError] = useState({});

  const {
    buyer: { email, nombre, apellido, telefono },
  } = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validarTodoLLeno([email, nombre, apellido, telefono])) {
      Swal.fire({
        title: "Oops!",
        text: "Faltan campos por completar",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Genial!",
      text: "Su orden de compra se genero correctamente con el numero!",
      icon: "success",
    });
    generarTicket({ datos: formulario });
    limpioElCarrito();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      return;
    }
    setError({});
  };

  return (
    <form onSubmit={onSubmit} className="container border">
      <h3 className="text-uppercase text-center my-4">datos Comprador</h3>
      {Object.keys(formulario.buyer).map((key, index) => (
        <Input
          key={index}
          className="mb-3"
          type="text"
          name={`${key}`}
          value={key.value}
          onChange={handleChange}
          onBlur={handleBlur}
          inputClassName={`form-control ${error[key] && "is-invalid"}`}
          placeholder={`${key}`}
          error={error}
        />
      ))}

      <div className="border row d-flex px-2">
        <div className="col-12 col-lg-9">
          <p className="fs-4 text-uppercase">total</p>
        </div>
        <div className="col-12 col-lg-3">
          <p className="fs-4">${total}</p>
        </div>
        <button
          type="submit"
          className="btn btn-primary text-uppercase w-100 my-4"
        >
          terminar la compra
        </button>
      </div>

      <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">
        volver a comprar
      </Link>
    </form>
  );
};

export default Formulario;
