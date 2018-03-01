import React from 'react'
import '../list.css'
export default function RecipeList(props) {
  const recipes = props.recipes

  if (typeof recipes === 'string') {
    return <div className="loading-recipes">{recipes}</div>
  } else {
    return <div className="recipe-list">
    {recipes.map(function(recipe,index) {

      return <div className="grid" key={index}>

      <a href={recipe.recipe.url}>
      <h2>{recipe.recipe.label}</h2>
      <img className="preview" src={recipe.recipe.image}/>
      </a>
      </div>
    })}
    </div>
  }
}
