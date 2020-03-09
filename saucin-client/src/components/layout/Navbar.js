import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import logo from '../../img/logo-sm.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faUsers,
  faBlog,
  faUtensils,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-1">
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/community"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faUsers} />
          Saucin Community
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/recipes"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faUtensils} />
          Recipes
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/blog"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faBlog} />
          Blog
        </Link>
      </li>
      <li>
        <Link
          to="/instagram"
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faInstagram} />
          Instagram
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/youtube"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faYoutube} />
          Videos
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/store"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faShoppingCart} />
          Store
        </Link>
      </li>
    </ul>
  );

  const profileAuthLink = (
    <Fragment>
      <Link
        to="/dashboard"
        className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
      >
        <img
          className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
          src={user && user.data.avatar}
          alt="Avatar"
        ></img>
      </Link>
      <Fragment>
        <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          <a
            onClick={logout}
            href="#!"
            className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          >
            <FontAwesomeIcon className="fa-md mr-1" icon={faSignOutAlt} />
            Logout
          </a>
        </div>
      </Fragment>
    </Fragment>
  );

  const logoLinkGuest = (
    <Link to="/">
      <img className="logo w-10" src={logo} alt="saucinwithsnyds logo" />
    </Link>
  );

  const logoLinkAuthorized = (
    <Link to="/dashboard">
      <img className="logo w-10" src={logo} alt="saucinwithsnyds logo" />
    </Link>
  );

  const visitorLinks = (
    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-1">
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/login"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faSignInAlt} />
          Login
        </Link>
      </li>
      <li>
        <Link
          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-black"
          to="/signup"
        >
          <FontAwesomeIcon className="fa-md mr-1" icon={faUserPlus} />
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="lg:px-16 mb-6 px-6 sm:pt-4 bg-white flex flex-wrap items-center lg:py-0 py-2 h-min-full lg:h-10">
      <div className="flex-1 flex justify-between items-center">
        {!loading && (
          <Fragment>
            {isAuthenticated ? logoLinkAuthorized : logoLinkGuest}
          </Fragment>
        )}
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
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : visitorLinks}</Fragment>
          )}
        </nav>
        {isAuthenticated ? profileAuthLink : ''}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
