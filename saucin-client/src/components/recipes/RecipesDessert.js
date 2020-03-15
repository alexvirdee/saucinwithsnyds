import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesDessert } from '../../actions/recipe';

const RecipesDessert = ({ getRecipesDessert }) => {
    useEffect(() => {
        getRecipesDessert();
      }, [getRecipesDessert]);

    return (
        <div>
          Dessert recipes
        </div>
    )
}

RecipesDessert.propTypes = {
    getRecipesDessert: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipes
})

export default connect(mapStateToProps, { getRecipesDessert })(RecipesDessert);