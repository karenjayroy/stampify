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
        case types.LOGIN_STORE:
        // console.log("Logging in store: " + action.payload.storeName );
         return {
             ...state,
               storeId: action.payload.storeId,
               storeName: action.payload.storeName,
         }

        case types.LOGOUT:
         return initialState;

        case types.STAMP_SUCCESS:
        //  console.log("Stamp success: " + action.payload.success );
         return {
           ...state,
           stampSuccess: action.payload.success
         }


         default:
            return state;
    }
}

export default storeReducer;
