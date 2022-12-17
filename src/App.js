import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import CartWidget from "./component/CartWidget/CartWidget";
import Card from "./component/Card/Card";
import Counter from "./component/Counter/Counter";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Error404 from "./component/Error404/Error404";

function App() {
  const [show, setshow] = useState(false);

  const toggle = () => setshow(!show);

  const operacion = new Promise((resolve, reject) => {});

  const [state, setstate] = useState([]);
  const vocales = ["a", "e", "i", "o", "u"];

  const handlekeydown = (e) => {
    const { key } = e;

    // const esVocal = vocales.some(vocal => vocal === key);

    if (!vocales.includes(key.ToUpperCase())) {
      setstate(state + key);
    }
  };

  return (
    <div className="App">
      {/* <ItemListContainer
        bienvenida={"BIENVENIDO AL PROYECTO"}
        nombre={"CESAR PETIT"}
      /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                bienvenida={"BIENVENIDO AL PROYECTO"}
                nombre={"CESAR PETIT"}
              />
            }
          />

          <Route path="/counter" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

      <form action="">
        <input value={state} onKeyDown={handlekeydown} type="text" />
      </form>

      {/* 
      {show ? <Counter nombre="componente 1"/> : null} */}

      {/* <Counter nombre="COMPONENTE 1" />
      <Counter nombre="COMPONENTE 2" />
      <Counter nombre="COMPONENTE 3" /> */}

      <button className="btn btn-dark px-5" onClick={toggle}>
        click
      </button>

      {/* <header className="App-header">
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
