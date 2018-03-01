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
      <img className="preview" src={recipe.recipe.image}/>
      <h3>{recipe.recipe.label}</h3>
      </a>
      </div>
    })}
    </div>
  }
}
