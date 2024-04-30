import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartItemShow, setCartItemShow] = useState(false)
  const showCart =()=>{
    setCartItemShow(true)
  }

  const hideCart =()=>{
    setCartItemShow(false)
  }
  return (
    <Fragment>
      { cartItemShow && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
