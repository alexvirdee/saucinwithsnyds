import axios from 'axios';
import { setAlert } from './alert';
import { GET_BLOG_POSTS, BLOG_POST_ERROR } from './types';

// Get all blog posts
export const getBlogPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/blogposts');
    console.log(res.data);

    dispatch({
      type: GET_BLOG_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOG_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
