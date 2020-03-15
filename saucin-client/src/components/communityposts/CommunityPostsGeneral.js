import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPostsGeneral } from '../../actions/communitypost';
import CommunityPostItem from './CommunityPostItem';


const CommunityPostsGeneral = ({
    getCommunityPostsGeneral,
  communitypost: { posts, loading }
}) => {
  useEffect(() => {
    getCommunityPostsGeneral();
  }, [getCommunityPostsGeneral]);

  return (
    loading ? (
      <Spinner />
    ) : (
      <Fragment>
          <div className="text-lg">
              General posts
          </div>
    </Fragment>
    )
    
  );
};

CommunityPostsGeneral.propTypes = {
  getCommunityPostsGeneral: PropTypes.func.isRequired,
  communitypost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  communitypost: state.communitypost
});

export default connect(mapStateToProps, { getCommunityPostsGeneral })(CommunityPostsGeneral);
