import axios from 'axios';

import { GET_YOUTUBE, YOUTUBE_ERROR } from './types';

// Get YouTube Account
export const getYoutube = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/youtube`);

    console.log(res);

    dispatch({
      type: GET_YOUTUBE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: YOUTUBE_ERROR
    });
  }
};
