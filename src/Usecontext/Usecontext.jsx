import { createContext, useReducer } from "react";

export let RecipeContext = createContext();

let Data = {
  searchRecipe: "",
  recipe: [],
};
let reducer = (state, action) => {
  switch (action.type) {
    case "setRecipe":
      return { ...state, recipe: [...state.recipe, action.payload] };

    case "setSearchRecipe":
      return { ...state, searchRecipe: action.payload };

    default:
      return state;
  }
};

export let UseContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, Data);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
