import axios from 'axios';
import { setAlert } from './alert';
import { GET_COMMUNITY_POSTS, COMMUNITY_POST_ERROR, UPDATE_LIKES } from './types';

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