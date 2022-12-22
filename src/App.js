import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CarritoDetail from "./component/CarritoDetail/CarritoDetail";
import Counter from "./component/Counter/Counter";
import Error404 from "./component/Error404/Error404";
import ItemDetailContainer from "./component/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const [show, setshow] = useState(false);


  const [carrito, setCarrito] = useState([]);
  const [count, setcount] = useState(0)

const addCarrito = (item) => {  
  setCarrito([...carrito, item]);
    setcount(count + 1);

    console.log("el Carrito", carrito)
}


  return (
    <div className="App">
   
      <Router>
        <NavBar count = {count} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                bienvenida="BIENVENIDO AL PROYECTO"
                nombre="CESAR PETIT"
                descripcion="Listado Productos"
              />
            }
          />
          <Route
            path="/item/:cat"
            element={
              <ItemListContainer
              bienvenida="BIENVENIDO AL PROYECTO"
              nombre="CESAR PETIT"              
              />              
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/item/detail/:id" element={<ItemDetailContainer addCarrito = {addCarrito} />} />
          <Route path="/carrito/detail" element={<CarritoDetail carrito= {carrito} />} />          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
