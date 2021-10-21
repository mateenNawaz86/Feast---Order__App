import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: 1,
      name: "Sushi",
      amount: 4,
      price: 12.21,
    },
  ];
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.15</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
