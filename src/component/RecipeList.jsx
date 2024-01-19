import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipes, handleRecipeAdd, handleRecipeDelete}) {
  return (
    <div className='recipe-list'>
    <div>
        {
        recipes.map(recipe => {
          return <Recipe 
          handleRecipeDelete = {handleRecipeDelete}
          key={recipe.id}
           {...recipe}
            />
        })
        }
    </div>
    <div className="recipe-list_btn_container">
    <button className='btn btn--primary' onClick={handleRecipeAdd}  >Add Recipe</button>

    </div>
    </div>
  )
}

