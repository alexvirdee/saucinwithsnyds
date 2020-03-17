import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesLunch } from '../../actions/recipe';

const RecipesLunch = ({ getRecipesLunch, recipe: { recipes, loading } }) => {
    useEffect(() => {
        getRecipesLunch();
      }, [getRecipesLunch]);

    return (
        loading ? (
            <Spinner />
        ) : (
            <Fragment>
                      <div className="text-4xl">
          Lunch recipes
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

RecipesLunch.propTypes = {
    getRecipesLunch: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipesLunch })(RecipesLunch);