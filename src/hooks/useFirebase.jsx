import { useState } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../services";
// import { GlobalProvider } from "../context/GlobalContext";
// import { async } from "@firebase/util";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [producto, setProducto] = useState({});
  const [ticket,setTicket] = useState();
  // const  {setLoading}  = GlobalProvider();

  const getProductos = async () => {
    try {
      const data = collection(db, "productos");
      const info = await getDocs(data);
      const response = info.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducto = async ({ id }) => {
    //setLoading(true);
    try {
      const document = doc(db, "productos", id);
      const response = await getDoc(document);
      let result = response.data();
      setProducto({ id: response.id, ...result });
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProducto = async (id, nuevoStock) => {
    try {
      const data = {
        stock: parseInt(nuevoStock),
      };
      console.log(data);
      const document = doc(db, "productos", id);
      await updateDoc(document, { stock: nuevoStock });
    } catch (error) {
      console.log(error);
    }
  };

  const generarTicket = async (datos) => {
    try {
      const document = collection(db, "ticket");
      const orden = await addDoc(document, datos);     
   
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    producto,
    ticket,
    getProductos,
    getProducto,
    updateProducto,
    generarTicket 
  };
};

export default useFirebase;
