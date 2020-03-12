import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPosts } from '../../actions/communitypost';

const CommunityPosts = ({
  getCommunityPosts,
  communitypost: { posts, loading }
}) => {
  useEffect(() => {
    getCommunityPosts();
  }, [getCommunityPosts]);

  return <div></div>;
};

CommunityPosts.propTypes = {
  getCommunityPosts: PropTypes.func.isRequired,
  communitypost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  communitypost: state.communitypost
});

export default connect(mapStateToProps, { getCommunityPosts })(CommunityPosts);
