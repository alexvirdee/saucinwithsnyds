import axios from 'axios';

import { GET_INSTAGRAM } from './types';

// Get Instagram Account
export const getInstagram = username => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/instagram/${username}`);

    dispatch({
      type: GET_INSTAGRAM,
      payload: res.data
    });
  } catch (err) {
    console.log('Error getting instagram account');
  }
};
