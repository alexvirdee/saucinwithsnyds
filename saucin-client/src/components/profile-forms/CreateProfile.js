import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    website: '',
    location: '',
    image: '',
    favoriteMeal: '',
    nickname: '',
    bio: '',
    youtube: '',
    twitter: '',
    facebook: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    website,
    location,
    image,
    favoriteMeal,
    nickname,
    bio,
    youtube,
    twitter,
    facebook,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div>
        <div className="container mx-auto p-6">
          <div className="lg:text-2xl md:text-3xl sm:text-2xl font-bold underline text-center text-indigo-500 pacifico">
            Create your Profile
          </div>
          <p className="text-lg text-center mb-4">
            Add some information to get started
          </p>
          <form onSubmit={e => onSubmit(e)} encType="multipart/form-data">
            <div className="ml-2 mb-2 p-1">
              <select
                value={favoriteMeal}
                onChange={e => onChange(e)}
                name="favoriteMeal"
              >
                <option value="0">* Select Your Favorite Meal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="md:flex mb-8">
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Website:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    type="text"
                    value={website}
                    onChange={e => onChange(e)}
                    name="website"
                    placeholder="www.janedoe.com"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Location:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    placeholder="Miami, Fl"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                    Nickname:
                  </label>
                  <input
                    className="w-full shadow-inner p-4 border-0"
                    placeholder="Will be used when you post recipes"
                    name="nickname"
                    value={nickname}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="container ml-2 mb-6">
                <button
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  type="button"
                  className="bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Add Social Networks
                </button>
              </div>
              {displaySocialInputs && (
                <Fragment>
                  <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                          Facebook
                        </label>
                        <div className="w-full flex">
                          <span className="text-md py-4 px-2 bg-grey-light text-grey-dark">
                            <FontAwesomeIcon
                              className="text-indigo-600"
                              icon={faFacebookF}
                              name="facebook"
                            />
                          </span>
                          <input
                            className="flex-1 shadow-inner p-4 border-0"
                            type="text"
                            name="facebook"
                            placeholder="Facebook"
                            value={facebook}
                            onChange={e => onChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                          Twitter
                        </label>
                        <div className="w-full flex">
                          <span className="text-md py-4 px-2 bg-grey-light text-grey-dark">
                            <FontAwesomeIcon
                              className="text-indigo-600"
                              icon={faTwitter}
                            />
                          </span>
                          <input
                            className="flex-1 shadow-inner p-4 border-0"
                            type="text"
                            name="twitter"
                            placeholder="Twitter"
                            value={twitter}
                            onChange={e => onChange(e)}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                          Instagram
                        </label>
                        <div className="w-full flex">
                          <span className="text-md py-4 px-2 bg-grey-light text-grey-dark">
                            <FontAwesomeIcon
                              className="text-indigo-600"
                              icon={faInstagram}
                            />
                          </span>
                          <input
                            className="flex-1 shadow-inner p-4 border-0"
                            type="text"
                            name="instagram"
                            placeholder="Instagram"
                            value={instagram}
                            onChange={e => onChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                          YouTube
                        </label>
                        <div className="w-full flex">
                          <span className="text-md py-4 px-2 bg-grey-light text-grey-dark">
                            <FontAwesomeIcon
                              className="text-indigo-600"
                              icon={faYoutube}
                            />
                          </span>
                          <input
                            className="flex-1 shadow-inner p-4 border-0"
                            type="text"
                            name="youtube"
                            value={youtube}
                            onChange={e => onChange(e)}
                            placeholder="YouTube"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
            <div>
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold mb-2 ml-4">
                Bio
              </label>
              <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                <textarea
                  className="w-full shadow-inner p-4 border-0 no-resize border-2 resize-none"
                  placeholder="Tell us about you..."
                  value={bio}
                  name="bio"
                  onChange={e => onChange(e)}
                  rows="6"
                ></textarea>
              </div>
            </div>
            <div className="md:flex mb-6 mt-4 ml-2">
              <div className="md:flex-1">
                <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold mb-2 ml-2">
                  Add Cover Image
                </label>
                <input
                  type="file"
                  className="bg-gray-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  value={image}
                  name="image"
                  onChange={e => onChange(e)}
                ></input>
              </div>
            </div>
            <div className="md:flex mb-6 ml-2 mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
