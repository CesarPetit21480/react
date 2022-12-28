import {useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CarritoDetail from "./component/CarritoDetail/CarritoDetail";
import Counter from "./component/Counter/Counter";
import Error404 from "./component/Error404/Error404";
import ItemDetailContainer from "./component/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import CarritoContextProvider from "./context/CarritoContext";
// import {CarritoContext}  from "./context/CarritoContext";

function App() {

  // const {ToastContainer} = useContext(CarritoContext);


//   const [carrito, setCarrito] = useState([]);
//   const [count, setcount] = useState(0);

//   const addCarrito = (item) => {
//     setCarrito([...carrito, item]);
//     setcount(count + 1); 
//     showToastMessage();
  
//   };

//   const showToastMessage = () => {
//     console.log('showToastMessage');
    
//     toast.success('Producto Agregado al Carrito!!!', {     
//       position: toast.POSITION.BOTTOM_RIGHT,
//     });
// };

  return (
    <CarritoContextProvider className="App">
      <Router>
        {/* <NavBar count={count} /> */}
        <NavBar/>
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
             element={<ItemDetailContainer/>}
          />
          <Route
            path="/carrito/detail"
            // element={<CarritoDetail carrito={carrito} />}
             element={<CarritoDetail/>}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </CarritoContextProvider>
  );
}

export default App;
