import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const CreateRecipe = ({ createCommunityPost, history }) => {
  //   const [formData, setFormData] = useState({
  //     category,
  //     title,
  //     body,
  //     image,
  //     avatar
  //   });

  //   const [displaySocialInputs, toggleSocialInputs] = useState(false);

  //   const { category, title, body, image, avatar } = formData;

  //   const onChange = e =>
  //     setFormData({ ...formData, [e.target.name]: e.target.value });

  //   const onSubmit = e => {
  //     e.preventDefault();
  //     createProfile(formData, history);
  //   };

  return (
    <Fragment>
      <div>
        <div className="container mx-auto p-6">
          <div className="lg:text-2xl md:text-3xl sm:text-2xl font-bold underline text-center pacifico">
            Create a Recipe
          </div>
          <p className="text-lg text-center mb-4 mt-2">
            Add necessary steps to make meal
          </p>
          <form encType="multipart/form-data">
            <div className="md:flex mb-8">
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">
                    Title:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    // value={title}
                    // onChange={e => onChange(e)}
                    name="title"
                    placeholder="How I make use of my new air fryer"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Description:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    // value={website}
                    // onChange={e => onChange(e)}
                    name="website"
                    placeholder="A short description of the recipe"
                  ></input>
                </div>
                <div className="ml-2 mb-2 p-1">
                  <select
                  // value={favoriteMeal}
                  // onChange={e => onChange(e)}
                  // name="favoriteMeal"
                  >
                    <option value="0"> Number of Servings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Prep Time:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    // value={website}
                    // onChange={e => onChange(e)}
                    name="website"
                    placeholder="10 minutes"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Cook Time:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    // value={website}
                    // onChange={e => onChange(e)}
                    name="website"
                    placeholder="35 minutes"
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold mb-2 ml-4">
                Ingredients *
              </label>
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <textarea
                  className="w-full shadow-inner p-4 border-0 no-resize border-2 resize-none"
                  placeholder="Ingredients needed to make recipe..."
                  //   value={body}
                  name="body"
                  //   onChange={e => onChange(e)}
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold mb-2 ml-4">
                Directions *
              </label>
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <textarea
                  className="w-full shadow-inner p-4 border-0 no-resize border-2 resize-none"
                  placeholder="Step by step directions to make recipe..."
                  //   value={body}
                  name="body"
                  //   onChange={e => onChange(e)}
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="md:flex mb-6 ml-2 mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-green-400"
              >
                Create Recipe
              </button>
              <Link
                to="/dashboard"
                type="button"
                className="ml-4 bg-gray-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow  hover:bg-gray-400"
              >
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CreateRecipe.propTypes = {
  CreateRecipe: PropTypes.func.isRequired
};

export default connect(null, { CreateRecipe })(withRouter(CreateRecipe));
