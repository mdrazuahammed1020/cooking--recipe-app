import RecipeList from "./component/RecipeList"
import '../src/css/app.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1.00',
      instructions: 'Instructs.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  
  return (
    <RecipeList
    handleRecipeAdd = {handleRecipeAdd}
    handleRecipeDelete = {handleRecipeDelete}
     recipes={recipes} />
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
