import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const RecipeItem = ({ auth, recipe: { _id, title, category, description, cookTime, prepTime, servings } }) => {
    return (
        <Link to={`/recipes/${_id}`}>
            <Fragment>
        <div className="max-w-sm w-full sm:max-w-full md:max-w-full lg:max-w-full sm:flex-initial lg:flex-initial">
          <div className="hover:bg-blue-100 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2 pacifico">{title}</div>
              <div className="font-bold text-xl mb-2 text-green-600">Category: {category}</div>
        
              <div className="cook-information mt-2">
              <p className="text-sm font-bold">Description: {description}</p> 
              <p className="text-sm font-bold">Time to Prep: {prepTime} minutes</p>
    <p className="text-sm font-bold">Time to Cook: {cookTime} minutes</p>
    <p className="text-sm font-bold text-blue-500">Number of Servings: {servings}</p>
              </div>
              {/* 
             */}
            </div>
            <div className="flex items-center">
              {/* <img
                className="w-10 h-10 rounded-full mr-4"
                src={avatar}
                alt="Avatar of {name}"
              ></img> */}
              <div className="text-sm">
                {/* <p className="text-gray-900 leading-none">{cookTime}</p>
                <p className="text-gray-900 leading-none">{prepTime}</p>
                <p className="text-gray-900 leading-none">{servings}</p> */}
                {/* <p className="text-gray-900 leading-none">{ingredients}</p> */}
                {/* <p className="text-gray-900 leading-none">{directions}</p>
                <p className="text-gray-600">
                  Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{' '}
                </p> */}
              </div>
              <div className="discussion-btn">
              {/* <Link
                  to={`/communityposts/${_id}`}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded ml-6 mt-2 border-b-4 rounded"
                >
                  View Recipe
                </Link> */}
              </div>
              {/* <div className="delete-btn ml-8">
                {!auth.loading && user === auth.user._id && (
                  <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Delete
                  </button>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </Fragment>
        </Link>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(RecipeItem);
