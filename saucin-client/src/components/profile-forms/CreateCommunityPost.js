import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommunityPost, addCommunityImage } from '../../actions/communitypost';

const CreateCommunityPost = ({ addCommunityPost, history }) => {
  const [formData, setFormData, file, setFile] = useState('');

  const { category, title, body, image } = formData;

  const onChange = e =>
    setFormData({ setFile, ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addCommunityPost(formData, history);
    addCommunityImage(formData.image)
    setFormData('');
  };

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
          <form onSubmit={e => onSubmit(e)} encType="multipart/form-data">
            <div className="ml-2 mb-2 p-1">
              <select
                value={category}
                onChange={e => onChange(e)}
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
                    value={title}
                    onChange={e => onChange(e)}
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
                  value={body}
                  name="body"
                  onChange={e => onChange(e)}
                  rows="8"
                ></textarea>
              </div>
            </div>
            <div class="mt-2 lg:ml-3">
              <label class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-green-500">
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="mt-1 text-base leading-normal">
                  Upload an image
                </span>
                <input value={image} onChange={e => onChange(e)} type="file" class="hidden" />
              </label>
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
  addCommunityPost: PropTypes.func.isRequired
};

export default connect(null, { addCommunityPost })(
  withRouter(CreateCommunityPost)
);
