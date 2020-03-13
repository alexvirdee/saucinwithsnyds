import axios from 'axios';
import { setAlert } from './alert';
import { GET_BLOG_POSTS, BLOG_POST_ERROR, ADD_BLOG_POST } from './types';

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

// Add a Blog Post
export const addBlogPost = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/api/v1/blogposts`, formData, config);

    dispatch({
      type: ADD_BLOG_POST,
      payload: res.data
    });

    dispatch(setAlert('Blog Post Added', 'bg-green-500 text-white'))

    history.push('/blog')
    
  } catch (err) {
      dispatch({
        type: BLOG_POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
  }
}