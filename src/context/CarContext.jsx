/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CarContext = createContext(null);

export const CarProvider = (props) => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/39b81c1a-99d6-4c46-8003-e59878b20b86")
      .then((res) => {
        setCar(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <CarContext.Provider value={[car, setCar]}>
      {props.children}
    </CarContext.Provider>
  );
};