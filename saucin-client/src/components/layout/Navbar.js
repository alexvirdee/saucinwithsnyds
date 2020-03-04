import React from 'react';
import logo from '../../img/logo-sm.png';

const Navbar = () => {
  return (
    <header className="lg:px-16 mb-6 px-6 sm:pt-4 bg-white flex flex-wrap items-center lg:py-0 py-2 h-min-full lg:h-10">
      <div className="flex-1 flex justify-between items-center">
        <a href="#">
          <img className="logo w-10" src={logo} alt="saucinwithsnyds logo" />
        </a>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-1">
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
                href="#"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
                href="#"
              >
                Store
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
                href="#"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
                href="#"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
        {/* <a
          href="#"
          className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
        >
          Logged in user gravatar
          <img
            className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
            src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
            alt="Andy Leverenz"
          ></img>
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
