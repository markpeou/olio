import React from 'react'

export default function RecipeList(props) {

  const recipes = props.recipes

  return <div>
  <img onClick={props.showRecipe}/>
  </div>


  }
