import React, { useState, useEffect } from "react";
// import { getItems } from "../../itemModel";
function App() {
  const [items, setItems] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    fetch("http://localhost:3000")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setItems(data);
      });
  }
}
export default App;
