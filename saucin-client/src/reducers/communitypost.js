import {
  GET_COMMUNITY_POSTS,
  COMMUNITY_POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMUNITY_POST,
  GET_COMMUNITY_POST,
  GET_COMMUNITY_POSTS_COOKING,
  GET_COMMUNITY_POSTS_LIFESTYLE,
  GET_COMMUNITY_POSTS_GENERAL
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMUNITY_POSTS_COOKING:
    case GET_COMMUNITY_POSTS_LIFESTYLE:
    case GET_COMMUNITY_POSTS_GENERAL:
    case GET_COMMUNITY_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_COMMUNITY_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case COMMUNITY_POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload._id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
