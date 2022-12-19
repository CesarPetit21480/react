import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./component/Counter/Counter";
import Error404 from "./component/Error404/Error404";
import ItemDetailContainer from "./component/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const [show, setshow] = useState(false);

  return (
    <div className="App">
   
      <Router>
        <NavBar />
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
            path="/item/:categoria"
            element={
              <ItemListContainer
              bienvenida="BIENVENIDO AL PROYECTO"
              nombre="CESAR PETIT"
              descripcion="Listado Productos"
              />              
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

      {/*      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
