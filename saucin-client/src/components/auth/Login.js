import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center lg:pt-6 h-screen lg:bg-gray-700 sm:pt-0 xs:bg-white">
      <div>
        <form className="p-12 m-1 bg-white rounded sm:shadow-none lg:shadow">
          <div className="text-4xl pb-4">Login to Saucinwithsnyds</div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane@example.com"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              ></input>
              <p className="text-gray-600 text-xs italic">
                Password must be 6 characters or longer
              </p>
            </div>
          </div>
          <Link
            to="/login"
            className="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
          >
            Login
          </Link>
          <div className="ml-4 px-3 text-sm italic inline">
            <p className="inline">
              Don't have an account?
              <Link className="text-blue-400 pl-2" to="/signup">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
