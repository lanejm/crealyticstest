import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "http://localhost:3000/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data); //get all our data in console
      console.dir(data)
      console.log(data[0].price)
      //find a way to put searchTerm onto data array
      if (data) {
        const newItems = data.map((item) => {
          const { title, gtin, gender, salePrice, price, imageLink } = item;

          return {
            title: title,
            gtin: gtin,
            gender: gender,
            salePrice: salePrice,
            price: price,
            image: imageLink,
          };
        });
        setItems(newItems);
      } else {
        setItems([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchItems();
  }, [searchTerm, fetchItems]);
  return (
    <AppContext.Provider value={{ loading, items, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
//mae sure to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
