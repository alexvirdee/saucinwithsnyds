import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesBreakfast } from '../../actions/recipe';

const RecipesBreakfast = ({ getRecipesBreakfast, recipe: { recipes, loading } }) => {
    useEffect(() => {
        getRecipesBreakfast();
      }, [getRecipesBreakfast]);

    return (
        loading ? (
            <Spinner />
        ) : ( <Fragment>
            <div className="text-4xl">
            Breakfast recipes
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

RecipesBreakfast.propTypes = {
    getRecipesBreakfast: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipesBreakfast })(RecipesBreakfast);
