import axios from 'axios';
import { setAlert } from './alert';
import { MESSAGE_SUCCESS, MESSAGE_FAIL } from './types';

// Send Message From Contact Form
export const sendMessage = ({ name, email, message }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, message });

  try {
    const res = await axios.post('/api/v1/contact', body, config);

    dispatch({
      type: MESSAGE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'bg-red-100')));
    }

    dispatch({
      type: MESSAGE_FAIL
    });
  }
};
