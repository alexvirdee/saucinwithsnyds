import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getCommunityPosts } from '../../actions/communitypost';
import CommunityPostItem from './CommunityPostItem';

import Cooking from '../../img/vegetables.jpg';
import Lifestyle from '../../img/lifestyle.jpg';
import General from '../../img/general.jpg';

// Lazy load 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CommunityPosts = ({
  getCommunityPosts,
  communitypost: { posts, loading }
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    const results = posts.filter(post => {
      console.log(post);
      post.toString().toLowerCase().includes(searchTerm)  
    }
    );
    setSearchPosts(results)
    getCommunityPosts();
  }, [getCommunityPosts, searchTerm]);

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
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search community posts..."
          ></input>
        </div>
        <div className="pt-1 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
          <div className="cursor-pointer category-overlay">
            <Fragment>
              <Link to="/communityposts/category/cooking">
              <LazyLoadImage effect="blur" src={Cooking}></LazyLoadImage>
              <div className="content">
                <div className="recipe-category-text pacifico">Cooking</div>
              </div>
              </Link>
            </Fragment>
          </div>
          <div className="cursor-pointer category-overlay">
            <Fragment>
            <Link to="/communityposts/category/lifestyle">
              <LazyLoadImage effect="blur" src={Lifestyle}></LazyLoadImage>
              <div className="content">
                <div className="recipe-category-text pacifico">Lifestyle</div>
              </div>
              </Link>
            </Fragment>
          </div>
          <div className="cursor-pointer category-overlay">
            <Fragment>
            <Link to="/communityposts/category/general">
              <LazyLoadImage effect="blur" src={General}></LazyLoadImage>
              <div className="content">
                <div className="recipe-category-text pacifico">General</div>
              </div>
              </Link>
            </Fragment>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="community-posts">
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
