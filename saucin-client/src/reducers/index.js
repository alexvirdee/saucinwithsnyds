import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import contact from './contact';
import instagram from './instagram';
import youtube from './youtube';

export default combineReducers({
  alert,
  auth,
  profile,
  instagram,
  youtube,
  contact
});
