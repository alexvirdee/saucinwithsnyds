import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import {
  faUser,
  faImages,
  faHamburger
} from '@fortawesome/free-solid-svg-icons';

const DashboardActions = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <div>
      <div className="sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row justify-center dashboard-actions mt-4">
        <div className="text-center ml-1 mt-2 edit-profile bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-indigo-400">
          <Link to="/edit-profile">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span className="m-1"></span>
            Edit Profile
          </Link>
        </div>
        <div className="text-center ml-1 mt-2 edit-profile bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-indigo-400">
          <Link to="/create-community-post">
            <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
            <span className="m-1"></span>
            Post to Community
          </Link>
        </div>
        {(user && user.data.role === 'admin') ||
        (user && user.data.role === 'publisher') ? (
          <Fragment>Admin or publisher Dashboard Actions</Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </div>
  );
};

DashboardActions.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  DashboardActions
);
