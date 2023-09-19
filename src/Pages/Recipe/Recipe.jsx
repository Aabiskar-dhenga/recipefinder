import React from "react";
import "./Recipe.css";
import Navbar from "../../Components/Navbar/Navbar";
import Recipecard from "../../Components/Recipecard/Recipecard";
import { useParams } from "react-router-dom";
const Recipe = () => {
  const { id } = useParams();
  return (
    <div className="recipeContainer">
      <Navbar />
      <Recipecard />
    </div>
  );
};

export default Recipe;
