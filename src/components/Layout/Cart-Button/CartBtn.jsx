import React from "react";
import { BiCart } from "react-icons/bi";

import classes from "./CartBtn.module.css";

const CartBtn = () => {
  return (
    <button className={classes.button}>
      <span>
        <BiCart className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>6</span>
    </button>
  );
};

export default CartBtn;
