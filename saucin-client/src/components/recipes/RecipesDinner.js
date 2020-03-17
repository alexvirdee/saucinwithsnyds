import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesDinner } from '../../actions/recipe';

const RecipesDinner = ({ getRecipesDinner, recipe: { recipes, loading } }) => {
    useEffect(() => {
        getRecipesDinner();
      }, [getRecipesDinner]);

    return (
        loading ? (
            <Spinner />
        ) : (
            <Fragment>
                      <div className="text-4xl">
          Dinner recipes
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

RecipesDinner.propTypes = {
    getRecipesDinner: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipesDinner })(RecipesDinner);