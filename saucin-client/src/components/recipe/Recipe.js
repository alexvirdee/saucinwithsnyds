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
        Single Recipe
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
