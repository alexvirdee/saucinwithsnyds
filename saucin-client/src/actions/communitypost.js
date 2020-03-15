import axios from 'axios';
import { setAlert } from './alert';
import { GET_COMMUNITY_POSTS, COMMUNITY_POST_ERROR, UPDATE_LIKES, ADD_COMMUNITY_POST, GET_COMMUNITY_POST, GET_COMMUNITY_POSTS_COOKING, GET_COMMUNITY_POSTS_LIFESTYLE, GET_COMMUNITY_POSTS_GENERAL } from './types';

// Get all community posts
export const getCommunityPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/communityposts');

    dispatch({
      type: GET_COMMUNITY_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all cooking community posts
export const getCommunityPostsCooking = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/communityposts/category/cooking');

    dispatch({
      type: GET_COMMUNITY_POSTS_COOKING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all lifestyle community posts
export const getCommunityPostsLifestyle = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/communityposts/category/lifestyle');

    dispatch({
      type: GET_COMMUNITY_POSTS_LIFESTYLE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all general community posts
export const getCommunityPostsGeneral = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/communityposts/category/general');

    dispatch({
      type: GET_COMMUNITY_POSTS_GENERAL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Function to add like to community post
export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/communityposts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });

  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Function to unlike to community post
export const removeLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/v1/communityposts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Function to add community post
export const addCommunityPost = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/api/v1/communityposts`, formData, config);

    dispatch({
      type: ADD_COMMUNITY_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Added to saucin feed', 'bg-green-500 text-white'))

    history.push('/communityposts')
    
  } catch (err) {
      dispatch({
        type: COMMUNITY_POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
  }
}

// Get single community post
export const getCommunityPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/communityposts/${id}`);

    dispatch({
      type: GET_COMMUNITY_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMUNITY_POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};