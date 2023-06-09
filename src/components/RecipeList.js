import React, {useContext} from "react";
import Recipe from "./Recipe";
import '../css/app.css'
import { RecipeContext } from "./App";

export default function RecipeList({recipes}) {
  const {handleRecipeAdd} = useContext(RecipeContext)
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} ></Recipe>;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn--primary" onClick={handleRecipeAdd}>Add Recipe</button>
      </div>
    </div>
  );
}
