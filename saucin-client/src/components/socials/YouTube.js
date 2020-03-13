import React, { Fragment, useEffect } from 'react';
import { getYoutube } from '../../actions/youtube';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const YouTube = ({ getYoutube, youtube: { videos, loading } }) => {
  useEffect(() => {
    getYoutube();
  }, [getYoutube]);

  return (
    loading? (
      <Spinner />
    ) : (
      <Fragment>
      <div className="youtube-page">
        <div className="heading text-4xl pacifico m-8">YouTube</div>
        <div className="videos">
          {videos.data !== undefined &&
            videos.data !== null &&
            videos.data.items.map((vid, index) => {
              return (
                <div className="m-8 flex flex-wrap-reverse" key={index}>
                  <iframe
                    className="rounded overflow-hidden shadow-lg mb-8 p-2"
                    width="600"
                    height="315"
                    src={`http://www.youtube.com/embed/${vid.id.videoId}`}
                  ></iframe>{' '}
                </div>
              );
            }).slice(0, -1)}
        </div>
      </div>
    </Fragment>
    )
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
