import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipes } from '../../actions/recipe';
import RecipeItem from './RecipeItem';

// Category Images
import Breakfast from '../../img/breakfast.jpeg';
import Lunch from '../../img/lunch.jpeg';
import Dinner from '../../img/dinner.jpg';
import Dessert from '../../img/dessert.jpg';

const Recipes = ({ getRecipes, recipe: { recipes, loading } }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]); 

  return ( loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="search-recipes">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search recipes..."
        ></input>
      </div>
      <div className="pt-1 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1">
        <div className="cursor-pointer category-overlay">
          <Fragment>
            <img src={Breakfast}></img>
            <div className="content">
              <div className="recipe-category-text pacifico">Breakfast</div>
            </div>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
            <img src={Lunch}></img>
            <div className="content">
              <div className="recipe-category-text pacifico">Lunch</div>
            </div>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
            <img src={Dinner}></img>
            <div className="content">
              <div className="recipe-category-text pacifico">Dinner</div>
            </div>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
            <img src={Dessert}></img>
            <div className="content">
              <div className="recipe-category-text pacifico">Dessert</div>
            </div>
          </Fragment>
        </div>
      </div>
      <Fragment>
          <div className="recipes mt-1">
            {recipes.data !== undefined &&
             recipes.data !== null && 
             recipes.data.map((recipe, index) => {
               return <RecipeItem key={recipe._id} recipe={recipe} />
             })
            }
          </div>
        </Fragment>
    </Fragment>
  )
    
  );
};


Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe
})

export default connect(mapStateToProps, { getRecipes })(Recipes);
