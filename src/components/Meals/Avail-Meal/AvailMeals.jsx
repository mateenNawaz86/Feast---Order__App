import React from "react";
import MealItem from "../Meal-Item/MealItem";
import Card from "../../UI/Card";

import classes from "./AvailMeals.module.css";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and Veggies",
    price: 12.21,
  },
  {
    id: 2,
    name: "Barbeque Burger",
    description: "Delicious BBQ burger ",
    price: 18.01,
  },
  {
    id: 3,
    name: "Chines Rice",
    description: "Vegitables rice",
    price: 12.21,
  },
];

const AvailMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => {
            return (
              <li>
                <MealItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  key={item.id}
                />
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailMeals;
