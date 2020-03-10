import React, { Fragment, useEffect } from 'react';
import { getYoutube } from '../../actions/youtube';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const YouTube = ({ getYoutube, youtube: { videos } }) => {
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
  getYoutube: PropTypes.func.isRequired,
  youtube: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  youtube: state.youtube
});

export default connect(mapStateToProps, { getYoutube })(YouTube);
