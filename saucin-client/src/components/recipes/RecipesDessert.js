import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesDessert } from '../../actions/recipe';

const RecipesDessert = ({ getRecipesDessert, recipe: { recipes, loading } }) => {
    useEffect(() => {
        getRecipesDessert();
      }, [getRecipesDessert]);

    return (
        loading ? (
            <Spinner />
        ) : (
            <Fragment>
                        <div className="text-4xl">
          Dessert recipes
          {recipes.data.map((recipe, index) => {
                return (
                    <div key={index} className="text-4xl">
                        {recipe.title}
                        </div>
                )
            })}
        </div>
            </Fragment>
        )
    )
}

RecipesDessert.propTypes = {
    getRecipesDessert: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipesDessert })(RecipesDessert);