import React from "react";
import MealForm from "../Meal-From/MealForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{classes.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealForm />
    </div>
  );
};

export default MealItem;