import { combineReducers } from 'redux';

export default combineReducers({
  nav: require('../NavigationRedux').reducer
});
