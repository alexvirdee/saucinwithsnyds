import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';

// Lazy load main img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import landingImage from '../../img/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="landing grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="inline-flex text-white h-full">
          <LazyLoadImage
            className="bg-scroll bg-center sm:bg-top md:bg-right lg:bg-bottom xl:bg-left"
            src={landingImage}
            alt="hero"
            height={landingImage.height}
          ></LazyLoadImage>
        </div>
        <div className="m-10">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 py-6">
            <div className="pacifico text-3xl">Welcome to Saucinwithsnyds</div>
            <p className="italic text-sm">No more tummy aches</p>
          </div>
          <div className="container grid gap-2 mt-2 w-full py-2">
            <Link
              to="/login"
              className="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
