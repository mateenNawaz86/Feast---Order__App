import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(!showCart);

  const hideCartHandler = () => setShowCart(!showCart);

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
