import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NabBar/NavBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import CartWidget from "./component/CartWidget/CartWidget";
import Card from "./component/Card/Card";
import Counter from "./component/Counter/Counter";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer
        bienvenida={"BIENVENIDO AL PROYECTO"}
        nombre={"CESAR PETIT"}
      />

      <Counter nombre="COMPONENTE 1" />
      <Counter nombre="COMPONENTE 2" />
      <Counter nombre="COMPONENTE 3" />

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
