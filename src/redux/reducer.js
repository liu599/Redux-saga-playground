import { combineReducers } from 'redux';

const user =  (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1});
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const dashboard = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  user,
  dashboard
})