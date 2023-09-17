import React, { useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  useEffect(() => {
    console.log("this is item", item);
  }, []);
  return (
    <Link to="/recipe">
      <div className="cardContainer">
        <div className="recipeImgWrapper">
          <img className="dishImg" src={item?.recipe?.images?.SMALL.url} />
        </div>
        <div>
          <h3 className="itemName">{item?.recipe?.label}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
