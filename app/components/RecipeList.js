import React from 'react'

export default function RecipeList(props) {


  const recipes = props.recipes

  if (typeof recipes === 'string') {
    return <div className="loading-recipes">{recipes}</div>
  } else {
    return <div className="recipe-list">
    {recipes.map(function(recipe,index) {

      return <div key={index}>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} />
      </div>
    })}
    </div>
  }
}
