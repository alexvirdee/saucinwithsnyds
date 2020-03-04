import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUtensils,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="flex landing">
      <div className="w-1/2 flex content-center bg-gray-100 mt-6 px-6">
        <div className="container mx-auto px-4 py-6">
          <div>
            <FontAwesomeIcon className="fa-lg inline mr-2" icon={faUsers} />
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl inline">
              Join the community
            </div>
          </div>
          <div>
            <FontAwesomeIcon className="fa-lg inline mr-4" icon={faUtensils} />
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl inline">
              Share Recipes
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              className="fa-lg inline mr-2"
              icon={faShoppingCart}
            />
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl inline">
              Buy Cooking Gear
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 px-6 mt-6">
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
