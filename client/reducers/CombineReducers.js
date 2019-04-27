import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './userReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  users: userReducer,
});

// make the combined reducers available for import
export default reducers;