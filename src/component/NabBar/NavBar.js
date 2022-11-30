import React from "react";
import "./css/Nabvar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

<com></com>;
const NavBar = () => {
  return ( 
      <nav className="navbar navbar-expand-lg navPropio">
        <div className="container-fluid">
          <a className="navbar-brand listaPropia" href="#">
            Principal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link listaPropia" aria-current="page" href="#">
                  Zapatillas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link listaPropia" href="#">
                  Remeras
                </a>
              </li>    
              <li className="nav-item">
                <a className="nav-link listaPropia" href="#">
                  Pantalones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link listaPropia" href="#">
                  Short
                </a>
              </li>      
            </ul>
            <form className="d-flex" role="search">
              <CartWidget />
            </form>
          </div>
        </div>
      </nav>
 
  );
};

export default NavBar;
