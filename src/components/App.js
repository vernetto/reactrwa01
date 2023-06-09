import React, { useState} from 'react';
import '../css/app.css';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    console.log("handleRecipeAdd")
    const newRecipe = {
      id : uuidv4(),
      name: 'New',
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'  }
      ]
    }
    console.log(newRecipe)
    setRecipes([...recipes, newRecipe])
    console.log(recipes)
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  } 

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
    </RecipeContext.Provider>
  );
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }      
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '1 Tbs'
      }      
    ] 
  }

]

export default App;
