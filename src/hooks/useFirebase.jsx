import { useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../services";
import { GlobalProvider } from "../context/GlobalContext";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [producto, setProducto] = useState({});
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


  return {
    data,
    producto,
    getProductos,
    getProducto,
  };
};

export default useFirebase;
