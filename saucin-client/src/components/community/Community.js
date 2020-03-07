import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Community = props => {
  return (
    <Fragment>
      <div className="h-40 grid grid-cols-4 gap-1">
        <div className="bg-gray-400">Create Posts</div>
        <div className="bg-gray-400">Discuss Cooking Tips</div>
        <div className="bg-gray-400">Be part of a community</div>
        <div className="bg-gray-400">Welcome to saucinwithsnyds</div>
      </div>
    </Fragment>
  );
};

Community.propTypes = {};

export default Community;
