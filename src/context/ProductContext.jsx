/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/6b2f3401-d503-4595-af2f-0c344f3a82c3")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};