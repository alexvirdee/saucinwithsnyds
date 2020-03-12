import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPosts } from '../../actions/communitypost';
import CommunityPostItem from './CommunityPostItem';

import Cooking from '../../img/vegetables.jpg';
import Lifestyle from '../../img/lifestyle.jpg';
import General from '../../img/general.jpg';

const CommunityPosts = ({
  getCommunityPosts,
  communitypost: { posts, loading }
}) => {
  useEffect(() => {
    getCommunityPosts();
  }, [getCommunityPosts]);

  return (
    loading ? (
      <Spinner />
    ) : (
      <Fragment>
      <Fragment>
        <div className="search-recipes">
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search community posts..."
          ></input>
        </div>
        <div className="pt-1 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          <div className="cursor-pointer category-overlay">
            <Fragment>
              <img src={Cooking}></img>
              <div className="content">
                <div className="recipe-category-text pacifico">Cooking</div>
              </div>
            </Fragment>
          </div>
          <div className="cursor-pointer category-overlay">
            <Fragment>
              <img src={Lifestyle}></img>
              <div className="content">
                <div className="recipe-category-text pacifico">Lifestyle</div>
              </div>
            </Fragment>
          </div>
          <div className="cursor-pointer category-overlay">
            <Fragment>
              <img src={General}></img>
              <div className="content">
                <div className="recipe-category-text pacifico">General</div>
              </div>
            </Fragment>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="cpmmunity-posts">
          {posts.map(post => (
            <CommunityPostItem key={post._id} post={post} />
          ))}
        </div>
      </Fragment>
    </Fragment>
    )
    
  );
};

CommunityPosts.propTypes = {
  getCommunityPosts: PropTypes.func.isRequired,
  communitypost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  communitypost: state.communitypost
});

export default connect(mapStateToProps, { getCommunityPosts })(CommunityPosts);
