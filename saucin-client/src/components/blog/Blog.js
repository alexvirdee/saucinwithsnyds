import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getBlogPosts } from '../../actions/blogpost';
import BlogItem from './BlogItem';

import Steak from '../../img/blog-steak.jpg';

const Blog = ({ getBlogPosts, blogpost: { posts, loading } }) => {
  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  return (
    loading? (
      <Spinner />
    ) : (
      <Fragment>
      <div className="search-blogposts">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search Blog Posts..."
        ></input>
      </div>
      <div className="blog-posts bg-gray-200">
        {posts.map(post => (
          <BlogItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
    )
  );
};

Blog.propTypes = {
  getBlogPosts: PropTypes.func.isRequired,
  blogpost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blogpost: state.blogpost
});

export default connect(mapStateToProps, { getBlogPosts })(Blog);
