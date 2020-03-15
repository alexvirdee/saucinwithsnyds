import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesDinner } from '../../actions/recipe';

const RecipesDinner = ({ getRecipesDinner }) => {
    useEffect(() => {
        getRecipesDinner();
      }, [getRecipesDinner]);

    return (
        <div>
          Dinner recipes
        </div>
    )
}

RecipesDinner.propTypes = {
    getRecipesDinner: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipes
})

export default connect(mapStateToProps, { getRecipesDinner })(RecipesDinner);