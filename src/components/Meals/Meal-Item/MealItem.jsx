import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";
import MealForm from "../Meal-From/MealForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealForm onAddCart={addToCartHandler} />
    </div>
  );
};

export default MealItem;
