import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPost, getCommunityPosts } from '../../actions/communitypost';

const CommunityPost = ({ getCommunityPost,  communitypost: { post, loading }, match }) => {
    useEffect(() => {
        getCommunityPost(match.params.id);
    }, [getCommunityPost])

   return loading || post === null ? <Spinner /> :  <Fragment>
       {post.title}
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
