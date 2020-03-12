import { GET_COMMUNITY_POSTS, COMMUNITY_POSTS_ERROR } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMUNITY_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case COMMUNITY_POSTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
