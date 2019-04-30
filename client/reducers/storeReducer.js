import * as types from '../constants/actionTypes'

//sets up an initial state
const initialState = {

  storeId: null,
  storeName: '',
  stampSuccess: null
}

//sets up the store reducer with initial state and action
//Includes cases for the stores with the actions created in the action types


const storeReducer = (state = initialState, action) => {
    switch(action.type) {

        case types.LOGIN_STORE: // Store is logging in so set state of Store data
         //console.log("Logging in store: " + action.payload.storeName );
         return {
             ...state,
               storeId: action.payload.storeId,
               storeName: action.payload.storeName,
         }

        case types.LOGOUT: // Logout by resetting state to empty variables. StorePage will Redirect
         return initialState;

        case types.STAMP_SUCCESS: //adding a stamp shows a confirmation message
         //console.log("Stamp success: " + action.payload.success );
         return {
           ...state,
           stampSuccess: action.payload.success
         }


         default:
            return state;
    }
}

export default storeReducer;
