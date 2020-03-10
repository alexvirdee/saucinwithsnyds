import { GET_YOUTUBE, YOUTUBE_ERROR } from '../actions/types';

const initialState = {
  videos: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_YOUTUBE:
      return {
        ...state,
        videos: payload,
        loading: false
      };
    case YOUTUBE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
