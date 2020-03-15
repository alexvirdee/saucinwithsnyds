import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPost, getCommunityPosts } from '../../actions/communitypost';

const CommunityPost = ({ getCommunityPost,  communitypost: { post, loading }, match }) => {
    useEffect(() => {
        getCommunityPost(match.params.id);
    }, [getCommunityPost])

   return loading || post === null ? <Spinner /> :  <Fragment>
        
<div class="flex flex-wrap mt-2 mx-2">
    <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
        <div class="p-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
  <div className="bg-blue-400 h-48"></div>
  <div class="px-6 py-4">
<div class="font-bold text-xl mb-2">{post.title}</div>
    <p class="text-gray-700 text-base">
      {post.body}
    </p>
  </div>
  <div class="px-6 py-4">
<span class="inline-block bg-black rounded-full px-3 py-1 text-sm text-white font-semibold mr-2"><Moment format="MMMM D, YYYY">{post.date}</Moment></span>
  </div>
</div>
        </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
        <div class="bg-blue-500 p-4">
          Discussion section
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
