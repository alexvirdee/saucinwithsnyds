import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Community = props => {
  return (
    <Fragment>
      <div className="h-40 grid grid-cols-4 gap-1">
        <div className="bg-gray-400">POST 1</div>
        <div className="bg-gray-400">POST 2</div>
        <div className="bg-gray-400">POST 3</div>
        <div className="bg-gray-400">POST 4</div>
      </div>
    </Fragment>
  );
};

Community.propTypes = {};

export default Community;
