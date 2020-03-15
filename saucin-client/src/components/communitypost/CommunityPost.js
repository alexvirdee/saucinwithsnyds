import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCommunityPost, getCommunityPosts } from '../../actions/communitypost';

const CommunityPost = ({ getCommunityPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getCommunityPost(match.params.id);
    }, [getCommunityPost])

   return loading || post === null ? <Spinner /> : <Fragment>
       POST
   </Fragment>
}

CommunityPost.propTypes = {
    getCommunityPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getCommunityPost })(CommunityPost);
