import React from 'react'

import { recipes } from '../util/RecipeData';

export default function RecipeList() {
  return (
    <div>
        <h1 style={{color: 'red'}}>Recipes</h1>
        {recipes.map(recipe => 
        <div key={recipe.id}>
           <h2>{recipe.name}</h2>
           <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                  {ingredient}
              </li>
            )}
           </ul> 
        </div>
        )}
    </div>
  )
}
