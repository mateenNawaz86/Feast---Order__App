import React, { useContext } from "react";
import { BiCart } from "react-icons/bi";
import CartContext from "../../../context/cart-context";

import classes from "./CartBtn.module.css";

const CartBtn = (props) => {
  const context = useContext(CartContext);

  const cartItems = context.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span>
        <BiCart className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartBtn;
