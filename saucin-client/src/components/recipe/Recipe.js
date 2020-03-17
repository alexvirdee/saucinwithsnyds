import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipe, getRecipes } from '../../actions/recipe';

const Recipe = ({ getRecipe, recipe: { recipe, loading }, match }) => {
    useEffect(() => {
        getRecipe(match.params.id)
    }, [getRecipe])

    return loading || recipe === null ? <Spinner /> : <Fragment>
        <div className="flex justify-center sm:bg-white lg:bg-blue-800">
       <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8 mb-12">
  <img class="w-full" src={recipe.data.image} alt="recipe"></img>
  <div class="px-6 py-4">
<div class="font-bold text-xl mb-2 pacifico">{recipe.data.title}</div>
    <p class="text-gray-700 text-base">
     Category: {recipe.data.category}
    </p>
    <p class="text-gray-700 text-base mt-4">
     Description: {recipe.data.description}
    </p>
  </div>
  <div class="px-6 py-4">
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-1">Servings: {recipe.data.servings}</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-1">Prep Time: {recipe.data.prepTime}</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Cook Time: {recipe.data.cookTime}</span>
  </div>
  <div class="px-6 py-4">
<div class="font-bold text-xl mb-2 pacifico">Ingredients</div>
    <p class="text-gray-700 text-base">
      {recipe.data.ingredients.map((ingredient, index) => {
          return (
              <div key={index} className="ingredients-list">
                  <ul>
          <li>{ingredient.amount} {ingredient.ingredient}</li>
                    </ul>
              </div>
          )
      })}
    </p>
  </div>
  <div className="px-6 py-4">
  <div class="font-bold text-xl mb-2 pacifico">Directions</div>
    <p class="text-gray-700 text-base">
      {recipe.data.directions.map((direction, index) => {
          return (
              <div key={index} className="directions">
                  <ul>
          <li><span className="font-bold"> {direction.step}: </span> {direction.direction}</li>
                    </ul>
              </div>
          )
      })}
    </p>
</div>
</div>
</div>
    </Fragment>

}

Recipe.propTypes = {
    getRecipe: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipe })(Recipe);
