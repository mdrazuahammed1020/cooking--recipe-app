import React,{ useState, useEffect } from "react"
import RecipeList from "./component/RecipeList"
import '../src/css/app.css'
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from "./component/RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingRecipeApp.react';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes );

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  console.log(selectedRecipe)
  
  useEffect(()=> {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON !== null) setRecipes(JSON.parse(recipeJSON));
  }, [])

  useEffect(()=>{
    console.log('setitem')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {id: uuidv4(), name: '', amount: ''}
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  
  return (
    <RecipeContext.Provider value={recipeContextValue} >
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe = {selectedRecipe} /> }
    </RecipeContext.Provider>
  )
}


const sampleRecipes = [
  {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1.45',
      instructions: '1. Put salt on chicken\n2. Put chicken in overn\n3. Eat chicken',
      ingredients: [
        {
          id: 1, 
          name: 'Chicken',
          amount: '2 Pounds'
        },
        {
          id: 2, 
          name: 'Salt',
          amount: '1 tbs'
        }
      ]
  },
  {
      id: 2,
      name: 'Plain Cook',
      servings: 5,
      cookTime: '0.45',
      instructions: '1. Put salt on chicken\n2. Put chicken in overn\n3. Eat chicken',
      ingredients: [
        {
          id: 1, 
          name: 'Cook',
          amount: '2 Pounds'
        },
        {
          id: 2, 
          name: 'Salt',
          amount: '2 tbs'
        }
      ]
  },
  {
    id: 3,
    name: 'Plain Kabab',
    servings: 5,
    cookTime: '0.45',
    instructions: '1. Put salt on chicken\n2. Put chicken in overn\n3. Eat chicken',
    ingredients: [
      {
        id: 1, 
        name: 'Mutton',
        amount: '2 Pounds'
      },
      {
        id: 2, 
        name: 'Salt',
        amount: '1 tbs'
      }
    ]
},

]


export default App
