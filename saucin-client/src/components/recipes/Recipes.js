import React from 'react';
import PropTypes from 'prop-types';

const Recipes = props => {
  return (
    <div className="h-40 grid grid-cols-4 gap-1">
      <div className="bg-gray-400">Breakfast</div>
      <div className="bg-gray-400">Lunch</div>
      <div className="bg-gray-400">Dinner</div>
      <div className="bg-gray-400">Dessert</div>
    </div>
  );
};

Recipes.propTypes = {};

export default Recipes;
