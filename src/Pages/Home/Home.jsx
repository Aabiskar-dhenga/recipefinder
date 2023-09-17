import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import { RecipeContext } from "../../Usecontext/Usecontext";

const Home = () => {
  let { state, dispatch } = useContext(RecipeContext);
  let [foodItems, setFoodItems] = useState([]);

  let [searchResult, setSearchResult] = useState([]);
  console.log(state.searchRecipe);

  // api part

  // calling the api part through useEffect so when page loads it works
  useEffect(() => {
    fetchData();
  }, []);

  
  // api fetching
  let fetchData = async () => {
    try {
      let apiUrl =
        "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies";

      let response = await axios.get(apiUrl, {
        headers: {
          "Accept-Language": "en",
          "X-RapidAPI-Key":
            "ff0c1b880fmsh0a8b9d811a6a542p1ad59ajsn62635496ea72",
          "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
        },
      });

      setFoodItems(response.data.hits);

      console.log("this is response", response.data.hits);
    } catch (error) {
      console.log(error.message);
    }
  };

  // api part end

  // search functionality part

  useEffect(() => {
   console.log("i am chaning",state.searchRecipe)
    searchFunctionality();
  }, [state.searchRecipe]);

  let searchFunctionality = () => {
    let results = foodItems.filter((card) => {
     return  card.recipe.label.toLowerCase().startsWith(state.searchRecipe.toLowerCase()) 
      
    });
    setSearchResult(results);

  };

console.log(foodItems)


  return (
    <div className="appContainer">
      <Navbar />
      <div className="container">
        {state.searchRecipe.length > 0
          ?  searchResult.map((card) => {
              return <Card item={card} />;
            })
          : foodItems.map((card) => {
              return <Card item={card} />;
   
   })}
   
      </div>
    </div>
  );
};

export default Home;
