import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPostsLifestyle } from '../../actions/communitypost';
import CommunityPostItem from './CommunityPostItem';


const CommunityPostsLifestyle = ({
    getCommunityPostsLifestyle,
  communitypost: { posts, loading }
}) => {
  useEffect(() => {
    getCommunityPostsLifestyle();
  }, [getCommunityPostsLifestyle]);

  return (
    loading ? (
      <Spinner />
    ) : (
      <Fragment>
          <div className="text-lg">
              Lifestyle posts
          </div>
    </Fragment>
    )
    
  );
};

CommunityPostsLifestyle.propTypes = {
  getCommunityPostsLifestyle: PropTypes.func.isRequired,
  communitypost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  communitypost: state.communitypost
});

export default connect(mapStateToProps, { getCommunityPostsLifestyle })(CommunityPostsLifestyle);