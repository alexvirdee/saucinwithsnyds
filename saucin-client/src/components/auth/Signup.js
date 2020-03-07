import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Signup = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match.', 'bg-red-100 text-red-800');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="flex justify-center lg:pt-6 h-screen lg:bg-gray-700 sm:pt-0 xs:bg-white">
        <div>
          <form
            onSubmit={e => onSubmit(e)}
            className="p-12 m-1 bg-white rounded sm:shadow-none lg:shadow"
          >
            <div className="text-4xl pb-4 text-center pacifico mb-3">
              Create your account
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  value={name}
                  onChange={e => onChange(e)}
                  name="name"
                  placeholder="Jane"
                  required
                ></input>
              </div>
            </div>
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
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder="Jane@example.com"
                  required
                ></input>
                <small class="italic text-gray-500">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
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
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => onChange(e)}
                  name="password"
                  minLength="6"
                ></input>
                {/* <p className="text-gray-600 text-xs italic">
                  Password must be 6 characters or longer
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password2"
                >
                  Confirm Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  minLength="6"
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="text-center bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
            >
              Sign up
            </button>
            <div className="ml-4 px-3 text-sm italic inline">
              <p className="inline">
                Already have an account?{' '}
                <Link className="text-blue-400" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
