import RecipeList from "./component/RecipeList"
import '../src/css/app.css'

function App() {

  return (
    <RecipeList recipes={sampleRecipes} />
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
