import React from "react";
import AvailMeals from "./Avail-Meal/AvailMeals";
import MealSummary from "./Meal-Summary/MealSummary";

const Meals = () => {
  return (
    <>
      <MealSummary />
      <AvailMeals/>
    </>
  );
};

export default Meals;
