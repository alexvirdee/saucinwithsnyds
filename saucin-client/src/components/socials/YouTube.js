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
      <div className="text-2xl">
        <div className="flex justify-center mb-10 pt-4">
          Saucingwithsnyds YouTube Channel
        </div>
        {videos.data !== undefined &&
          videos.data !== null &&
          videos.data.items.map((vid, index) => {
            return (
              <div className="container mx-auto flex" key={index}>
                <div className="youtube-title flex-1 mt-10">
                  {vid.snippet.title}
                </div>{' '}
                <br></br>
                <iframe
                  className="flex-1 mb-8"
                  width="600"
                  height="315"
                  src={`http://www.youtube.com/embed/${vid.id.videoId}`}
                ></iframe>{' '}
              </div>
            );
          })}
      </div>
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
