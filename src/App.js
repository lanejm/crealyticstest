import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SingleItem from "./pages/singleItem";
// import components
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        <Route path="/:title">
          <SingleItem />
        </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;





// import React, { useState, useEffect } from "react";
// import { getItems } from "../../itemModel";
// function App() {
//   const [items, setItems] = useState(false);
//   useEffect(() => {
//     getProducts();
//   }, []);
//   function getProducts() {
//     fetch("http://localhost:3000")
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         setItems(data);
//       });
//   }
// }
// export default App;
