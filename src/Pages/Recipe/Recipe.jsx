import React from "react";
import "./Recipe.css";
import Navbar from "../../Components/Navbar/Navbar";
import Recipecard from "../../Components/Recipecard/Recipecard";

const Recipe = () => {
  return (
    <div className="recipeContainer">
      <Navbar />
      <Recipecard />
    </div>
  );
};

export default Recipe;
