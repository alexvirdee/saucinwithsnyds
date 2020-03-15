import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesLunch } from '../../actions/recipe';

const RecipesLunch = ({ getRecipesLunch }) => {
    useEffect(() => {
        getRecipesLunch();
      }, [getRecipesLunch]);

    return (
        <div>
          Lunch recipes
        </div>
    )
}

RecipesLunch.propTypes = {
    getRecipesLunch: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipes
})

export default connect(mapStateToProps, { getRecipesLunch })(RecipesLunch);