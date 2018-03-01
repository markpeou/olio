import React from 'react'


export default function RecipeInfo(props) {

  const recipeInfo = props.recipeInfo

    return <div className="info">
    {recipeInfo}
    </div>
  }
