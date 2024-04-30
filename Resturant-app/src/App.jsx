import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartItemShow, setCartItemShow] = useState(false)
  const showCart =()=>{
    setCartItemShow(true)
  }

  const hideCart =()=>{
    setCartItemShow(false)
  }
  return (
    <CartProvider>
      { cartItemShow && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
