import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  const totalAmount = `$ ${context.totalAmount.toFixed(2)}`;
  const identifierItem = context.items.length > 0;

  const itemRemoveHandler = (id) => { };
  const itemAddHandler = (item) => {};
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {context.items.map((item) => {
          return (
            <CartItem
              price={item.price}
              name={item.name}
              amount={item.amount}
              key={item.id}
              onRemove={itemRemoveHandler.bind(null, item.id)}
              onAdd={itemAddHandler.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {identifierItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
