import axios from 'axios';
import { setAlert } from './alert';
import { GET_COMMUNITY_POSTS, COMMUNITY_POST_ERROR } from './types';

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
