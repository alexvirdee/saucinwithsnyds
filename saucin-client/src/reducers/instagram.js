import { GET_INSTAGRAM, INSTAGRAM_ERROR } from '../actions/types';

const initialState = {
  photos: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INSTAGRAM:
      return {
        ...state,
        photos: payload,
        loading: false
      };
    case INSTAGRAM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
