/* eslint-disable no-unused-vars */
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon ";
import { useContext } from "react";
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberofCartItem = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItem}</span>
    </button>
  );
}

export default HeaderCartButton;
