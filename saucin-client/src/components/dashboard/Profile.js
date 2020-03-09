import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Profile = ({ profile }) => {
  return (
    <Fragment>
      <table className="table-auto flex justify-center m-8">
        <tbody>
          <tr>
            <td className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{profile.favoriteMeal}
            </td>
            <td className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{profile.location}
            </td>
            <td className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{profile.bio}
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

Profile.propTypes = {};

export default Profile;
