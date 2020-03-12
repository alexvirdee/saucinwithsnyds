import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Category Images
import Breakfast from '../../img/breakfast.jpeg';
import Lunch from '../../img/lunch.jpeg';
import Dinner from '../../img/dinner.jpg';
import Dessert from '../../img/dessert.jpg';

const Recipes = props => {
  return (
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
    </Fragment>
  );
};

Recipes.propTypes = {};

export default Recipes;
