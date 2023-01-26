import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CarritoDetail from "./component/CarritoDetail/CarritoDetail";
import Counter from "./component/Counter/Counter";
import Error404 from "./component/Error404/Error404";
import ItemDetailContainer from "./component/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import CarritoContextProvider from "./context/CarritoContext";
import GlobalState from "./context/GlobalContext";
// import {CarritoContext}  from "./context/CarritoContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GlobalState>
      <CarritoContextProvider className="App">
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
              path="/item/:cat"
              element={
                <ItemListContainer
                  bienvenida="BIENVENIDO AL PROYECTO"
                  nombre="CESAR PETIT"
                />
              }
            />
            <Route path="/counter" element={<Counter />} />
            <Route
              path="/item/detail/:id"
              // element={<ItemDetailContainer addCarrito={addCarrito} />}
              element={<ItemDetailContainer />}
            />
            <Route
              path="/carrito/detail"
              // element={<CarritoDetail carrito={carrito} />}
              element={<CarritoDetail />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
        <ToastContainer />
      </CarritoContextProvider>
    </GlobalState>
  );
}

export default App;
