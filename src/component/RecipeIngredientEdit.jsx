/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange }) {
  function handleChange(change){
    handleIngredientChange(ingredient.id, {...ingredient, ...change})
  }

  function ingredientDelete(id){
    console.log(ingredient)
  }
  
  return (
    <>
    <input
     className='recipe-edit__input'
     type="text"
     value={ingredient.name}
     onInput={e => handleChange({name: e.target.value})}
    />
    <input
     className='recipe-edit__input'
     type="text"
     value={ingredient.amount}
     onInput={e => handleChange({amount: e.target.value})}
    />
    <button className='btn btn--danger' onClick={()=> ingredientDelete(ingredient.id)} >&times;</button>
    </>
  )
}
 