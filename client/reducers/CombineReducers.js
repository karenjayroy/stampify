import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './userReducer';
import storeReducer from './storeReducer';


// combine reducers
const reducers = combineReducers({
  //both reducers combined
  user: userReducer,
  store: storeReducer,
});

// make the combined reducers available for import
export default reducers;
