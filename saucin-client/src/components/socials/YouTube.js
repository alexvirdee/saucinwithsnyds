import React, { Fragment, useEffect } from 'react';
import { getYoutube } from '../../actions/youtube';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const YouTube = ({ getYoutube }) => {
  useEffect(() => {
    getYoutube();
  }, []);

  return (
    <Fragment>
      <div className="text-4xl container mx-auto">YouTube Data</div>
    </Fragment>
  );
};

YouTube.propTypes = {
  getYoutube: PropTypes.func.isRequired
};

export default connect(null, { getYoutube })(YouTube);
