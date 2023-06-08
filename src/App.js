import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Meals from "./components/Dashboard/Meals/Meals";
import Cart from "./components/Cart/CartIcon";
import CartProvider from "./store/CartProvider";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

function App() {
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
    <CartProvider>
     
      <main>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard/meal-item" element={<Meals />} />
        </Routes>
      </main>
    </CartProvider>
    
  );
}

export default App;
