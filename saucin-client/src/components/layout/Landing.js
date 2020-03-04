import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUtensils,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import landingImage from '../../img/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg';

const Landing = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="inline-flex lg:h-screen md:h-screen text-white">
        <img
          className="bg-scroll bg-center sm:bg-top md:bg-right lg:bg-bottom xl:bg-left"
          src={landingImage}
        ></img>
        <div className="absolute flex container">
          <div className="sm:my-4 md:my-6 my-2 px-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <FontAwesomeIcon className="fa-sm mr-2 mb-1" icon={faUsers} />
            <div className="inline">Join the community</div>
            <br></br>
            <FontAwesomeIcon className="fa-sm mr-4 mb-1" icon={faUtensils} />
            <div className="inline">Share Recipes</div>
            <br></br>
            <FontAwesomeIcon className="fa-sm mr-2 " icon={faShoppingCart} />
            <div className="inline">Buy Cooking Gear</div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 py-6">
          Welcome to Saucinwithsnyds
          <p className="italic text-sm">No more tummy aches</p>
        </div>
        <p className="text-md mb-2">Join saucinwithsnyds today.</p>
        <div className="container grid gap-2 mt-4 w-3/4">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow rounded shadow">
            Log in
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
