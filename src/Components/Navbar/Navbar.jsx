import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../Usecontext/Usecontext";

const Navbar = () => {
  let { state, dispatch } = useContext(RecipeContext);
  // let [searchTerm, setSearchTerm] = useState([]);
  let handleChange = (e) => {
    let data = e.target.value;
    dispatch({ type: "setSearchRecipe", payload: data });


  };
  return (
    <div className="navBar">
      <div className="logoWrapper">
        <img
          className="logoImg"
          src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png"
          alt="logoImg"
        />
        <Link className="noUnderline" to="/">
          <h3 className="brandName">DhengaStall</h3>
        </Link>
      </div>
      <div className="inputWrapper">
        <input
          onChange={handleChange}
          className="recipeInputBox"
          placeholder="enter the recipe"
          type="text"
        />
        {/* <button className="searchBtn">search</button> */}
      </div>
      <Link to="/recipe" className="noUnderline">
        <h3 className="bestDish">Recipe</h3>
      </Link>
    </div>
  );
};

export default Navbar;
