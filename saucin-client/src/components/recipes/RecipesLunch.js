import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesLunch } from '../../actions/recipe';

// Lazy load 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Lunch from '../../img/lunch-category.jpg';

const RecipesLunch = ({ getRecipesLunch, recipe: { recipes, loading } }) => {
    useEffect(() => {
        getRecipesLunch();
      }, [getRecipesLunch]);

    return (
        loading ? (
            <Spinner />
        ) : (
            <Fragment>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div clasName="heading-image first-column">
            <LazyLoadImage className="lg:h-screen md:h-screen sm:h-1/2 w-full" effect="blur" src={Lunch}></LazyLoadImage>
            </div>
            <div className="breakfast-recipes second-column">
            {recipes.data.map((recipe, index) => {
                return (
                    <div key={index}>
                        <div class="max-w-full rounded overflow-hidden shadow-lg mt-4">
  <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{recipe.title}</div>
    <p class="text-gray-700 text-base">
      {recipe.description}
    </p>
  </div>
  <div class="px-6 py-4">
  <Link
                  to={`/recipes/${recipe._id}`}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded mt-2 border-b-4 rounded"
                >
                  View Recipe
                </Link>
  </div>
</div>
                        </div>
                )
            })}
            </div>
            </div>
        </Fragment>
        )
    )
}

RecipesLunch.propTypes = {
    getRecipesLunch: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipesLunch })(RecipesLunch);