import React from 'react';
import { Link } from 'react-router-dom';

import bgImage from '../../img/grill-chicken.jpg';

const Signup = () => {
  return (
    <div className="flex justify-center lg:pt-6 h-screen lg:bg-gray-700 sm:pt-0 xs:bg-white">
      <div>
        <form class="p-12 m-1 bg-white rounded sm:shadow-none lg:shadow">
          <div className="text-4xl pb-4">Create your account today</div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Username
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              ></input>
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane@example.com"
              ></input>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              ></input>
              <p class="text-gray-600 text-xs italic">
                Password must be 6 characters or longer
              </p>
            </div>
          </div>
          <Link
            to="/signup"
            className="text-center bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
          >
            Sign up
          </Link>
          <div className="ml-4 px-3 text-blue-400 text-sm italic inline">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
