import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const CreateCommunityPost = ({ createCommunityPost, history }) => {
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
            Add a Post
          </div>
          <p className="text-lg text-center mb-4 mt-2">
            Contribute to the saucinwithsnyds community
          </p>
          <form encType="multipart/form-data">
            <div className="ml-2 mb-2 p-1">
              <select
                // value={category}
                // onChange={e => onChange(e)}
                name="category"
              >
                <option value="0"> Select a category </option>
                <option value="Cooking">Cooking</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="General">General</option>
              </select>
            </div>
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
              </div>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold mb-2 ml-4">
                Body *
              </label>
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <textarea
                  className="w-full shadow-inner p-4 border-0 no-resize border-2 resize-none"
                  placeholder="A descriptive post for the saucinwithsnyds community..."
                  //   value={body}
                  name="body"
                  //   onChange={e => onChange(e)}
                  rows="8"
                ></textarea>
              </div>
            </div>
            <div className="md:flex mb-6 ml-2 mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-green-400"
              >
                Create Post
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

CreateCommunityPost.propTypes = {
  CreateCommunityPost: PropTypes.func.isRequired
};

export default connect(null, { CreateCommunityPost })(
  withRouter(CreateCommunityPost)
);
