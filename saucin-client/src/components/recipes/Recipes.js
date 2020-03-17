import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

// Lazy load 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
          <Link to="/recipes/breakfast">
            <LazyLoadImage effect="blur" src={Breakfast}></LazyLoadImage>
            <div className="content">
              <div className="recipe-category-text pacifico">Breakfast</div>
            </div>
            </Link>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
          <Link to="/recipes/lunch">
            <LazyLoadImage effect="blur" src={Lunch}></LazyLoadImage>
            <div className="content">
              <div className="recipe-category-text pacifico">Lunch</div>
            </div>
            </Link>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
          <Link to="/recipes/dinner">
            <LazyLoadImage effect="blur" src={Dinner}></LazyLoadImage>
            <div className="content">
              <div className="recipe-category-text pacifico">Dinner</div>
            </div>
            </Link>
          </Fragment>
        </div>
        <div className="cursor-pointer category-overlay">
          <Fragment>
          <Link to="/recipes/dessert">
            <LazyLoadImage effect="blur" src={Dessert}></LazyLoadImage>
            <div className="content">
              <div className="recipe-category-text pacifico">Dessert</div>
            </div>
            </Link>
          </Fragment>
        </div>
      </div>
      <Fragment>
          <div className="recipes mt-1 bg-gray-200">
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
