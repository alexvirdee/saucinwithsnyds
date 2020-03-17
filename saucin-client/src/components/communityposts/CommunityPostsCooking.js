import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <div className="text-2xl flex justify-center pacifico">
              Cooking Posts
          </div>
          <div className="posts-area flex flex-wrap grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
            {posts.map((post, index) => {
              return (
                <div key={index} className="post flex-1 mt-8 hover:bg-gray-100">
                 <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
              <div className="font-bold text-md mb-2">{post.title}</div>
              <div className="mb-2">{post.body}</div>
              <div className="bottom-card flex mt-4">
              <img
                className="w-8 h-8 rounded-full mr-4 mt-2"
                src={post.avatar}
                alt="Avatar of {name}"
              ></img>
               <Link
                to={`/communityposts/${post._id}`}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded mt-2 border-b-4 rounded"
              >
                View
              </Link>
              </div>
                
  </div>
</div>
                </div>
              )
            })}
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
