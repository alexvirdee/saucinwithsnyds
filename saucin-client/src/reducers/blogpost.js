import { GET_BLOG_POSTS, BLOG_POST_ERROR } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOG_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case BLOG_POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
