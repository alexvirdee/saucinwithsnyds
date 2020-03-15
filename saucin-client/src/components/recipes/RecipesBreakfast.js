import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipesBreakfast } from '../../actions/recipe';

const RecipesBreakfast = ({ getRecipesBreakfast }) => {
    useEffect(() => {
        getRecipesBreakfast();
      }, [getRecipesBreakfast]);

    return (
        <div>
            Breakfast recipes
        </div>
    )
}

RecipesBreakfast.propTypes = {
    getRecipesBreakfast: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipes
})

export default connect(mapStateToProps, { getRecipesBreakfast })(RecipesBreakfast);
