import React from "react";
import "./Recipecard.css";

const Recipecard = () => {
  return (
    <div className="recipeCard">
      <img
        className="foodImg"
        src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="recipeImg"
      />
      <h1>Name: Japanese Vegan</h1>
      <div className="foodInfo">
        <p>Diet labels: Balanced</p>
        <p>Cusition type : American</p>
        <p>Calories: 2.32343</p>
        <div className="ingredientandvitamins">
          <ul>
            <h3 className="listingHeading">Contains this</h3>
            <li>Clacium</li>
            <li>CArba</li>
            <li>Fat</li>
            <li>Fiber</li>
            <li>Folic Acid </li>
            <li>Saturated</li>
          </ul>
          <ul>
            <h3 className="listingHeading">Ingredients</h3>
            <li>Calcium</li>
            <li>CArba</li>
            <li>Fat</li>
            <li>Fiber</li>
            <li>Folic Acid </li>
            <li>Saturated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
