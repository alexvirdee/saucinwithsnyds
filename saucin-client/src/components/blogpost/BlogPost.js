import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getBlogPost } from '../../actions/blogpost';

const BlogPost = ({ getBlogPost, blogpost: { post, loading }, match }) => {
    useEffect(() => {
        getBlogPost(match.params.id);
    }, [getBlogPost])

    return loading || post === null ? <Spinner /> : <Fragment>
       <div class="flex justify-center mb-4">
  <div class="h-screen">
      <div className="text-4xl container mx-auto text-center mt-4">
          {post.title}
      </div>
      <div className="blog-body">
      <div className="mt-8 text-center">
          {post.body}
      </div>
      </div>
  </div>
</div>
    </Fragment>
}

BlogPost.propTypes = {
    getBlogPost: PropTypes.func.isRequired,
    blogpost: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    blogpost: state.blogpost
})

export default connect(mapStateToProps, { getBlogPost })(BlogPost);
