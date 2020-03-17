import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPost, getCommunityPosts } from '../../actions/communitypost';
import CommunityPostCommentForm from './CommunityPostForm';

const CommunityPost = ({ getCommunityPost,  communitypost: { post, loading }, match }) => {
    useEffect(() => {
        getCommunityPost(match.params.id);
    }, [getCommunityPost])

   return loading || post === null ? <Spinner /> :  <Fragment>
        
<div className="flex flex-wrap mt-2 mx-2">
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
        <div className="p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
  <div className="bg-blue-400 h-48"></div>
  <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">{post.title}</div>
    <p className="text-gray-700 text-base">
      {post.body}
    </p>
  </div>
  <div className="px-6 py-4">
<span className="inline-block bg-black rounded-full px-3 py-1 text-sm text-white font-semibold mr-2"><Moment format="MMMM D, YYYY">{post.date}</Moment></span>
  </div>
</div>
        </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
        <div className="p-6">
          <CommunityPostCommentForm postId={post._id} />
        </div>
    </div>
</div>
   </Fragment>
}

CommunityPost.propTypes = {
    getCommunityPost: PropTypes.func.isRequired,
    communitypost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    communitypost: state.communitypost
})

export default connect(mapStateToProps, { getCommunityPost })(CommunityPost);
