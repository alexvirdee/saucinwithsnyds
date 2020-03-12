import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getBlogPosts } from '../../actions/blogpost';

const Blog = ({ getBlogPosts, blogpost: { posts, loading } }) => {
  return <div className="container mx-auto text-4xl">Blog Page</div>;
};

Blog.propTypes = {
  getBlogPosts: PropTypes.func.isRequired,
  blogpost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blogpost: state.blogpost
});

export default connect(mapStateToProps, { getBlogPosts })(Blog);
