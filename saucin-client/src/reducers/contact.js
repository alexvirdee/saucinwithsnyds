import { MESSAGE_SUCCESS, MESSAGE_FAIL } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MESSAGE_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
}
