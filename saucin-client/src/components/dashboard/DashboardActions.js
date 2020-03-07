import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
  return (
    <div className="container mx-auto flex dashboard-actions mt-2">
      <div className="edit-profile bg-indigo-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-indigo-400">
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <span className="m-1"></span>
        <Link to="/edit-profile">Edit Profile</Link>
      </div>
      <div className="cover-photo"></div>
      <div className="profile-photo"></div>
    </div>
  );
};

export default DashboardActions;
