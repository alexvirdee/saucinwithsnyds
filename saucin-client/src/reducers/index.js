import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import contact from './contact';
import instagram from './instagram';
import youtube from './youtube';
import communitypost from './communitypost';
import blogpost from './blogpost';
import recipe from './recipe';

export default combineReducers({
  alert,
  auth,
  profile,
  instagram,
  youtube,
  contact,
  communitypost,
  blogpost,
  recipe
});
