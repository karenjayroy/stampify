import * as types from '../constants/actionTypes'
//sets up an initial state

const initialState = {
  storeId: null,
  storeName: '',
  stampSuccess: null
}

const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_STORE:
         console.log("Logging in store: " + action.payload.storeName );
         return {
             ...state,
               storeId: action.payload.storeId,
               storeName: action.payload.storeName,
         }

        case types.LOGOUT:
         return initialState;

        case types.STAMP_SUCCESS:
         console.log("Stamp success: " + action.payload.success );
         return {
           ...state,
           stampSuccess: action.payload.success
         }


         default:
            return state;
    }
}

export default storeReducer;
