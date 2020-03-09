import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert(
        'Please enter both email and password.',
        'bg-red-100 text-red-800'
      );
    }
    login(email, password);
  };

  // Redirect if logged in
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
            <div className="text-4xl pb-4 mb-3 text-center">
              <span className="pacifico"> Saucinwithsnyds</span>{' '}
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
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
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
                  type="password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={e => onChange(e)}
                  placeholder="******************"
                ></input>
              </div>
            </div>
            <button
              type="submit"
              value="login"
              className="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow rounded shadow"
            >
              Login
            </button>
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
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(Login);
