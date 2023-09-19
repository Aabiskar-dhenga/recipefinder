import React from "react";
import "./Recipecard.css";
import { useLocation } from "react-router-dom";

const Recipecard = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="recipeCard">
      <img
        className="foodImg"
        src={state?.recipe?.images?.SMALL.url}
        alt="recipeImg"
      />
      <h1>Name: {state.recipe.label}</h1>
      <div className="foodInfo">
        <p>Diet labels: {state.recipe.dietLabels}</p>
        <p>Cusition type : {state.recipe.mealType}</p>
        <p>Calories: {state.recipe.calories}</p>
        <div className="ingredientandvitamins">
          <h3 className="listingHeading">Contains this Ingredient</h3>
          <ul>
            {state.recipe.ingredients.map((item) => {
              return (
                <li>
                  {item.text} <br />
                  weight: {item.weight} <br />
                  FoodCategory: {item.foodCategory}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
