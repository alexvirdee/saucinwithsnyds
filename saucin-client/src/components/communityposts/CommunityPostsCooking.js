import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPostsCooking } from '../../actions/communitypost';
import CommunityPostItem from './CommunityPostItem';

import Cooking from '../../img/vegetables.jpg';
import Lifestyle from '../../img/lifestyle.jpg';
import General from '../../img/general.jpg';

const CommunityPostsCooking = ({
    getCommunityPostsCooking,
  communitypost: { posts, loading }
}) => {
  useEffect(() => {
    getCommunityPostsCooking();
  }, [getCommunityPostsCooking]);

  return (
    loading ? (
      <Spinner />
    ) : (
      <Fragment>
          <div className="text-lg">
              Cooking posts
          </div>
    </Fragment>
    )
    
  );
};

CommunityPostsCooking.propTypes = {
  getCommunityPostsCooking: PropTypes.func.isRequired,
  communitypost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  communitypost: state.communitypost
});

export default connect(mapStateToProps, { getCommunityPostsCooking })(CommunityPostsCooking);
