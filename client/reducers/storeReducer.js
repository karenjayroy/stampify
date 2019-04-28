import * as types from '../constants/actionTypes'
//sets up an initial state
import initialState from '../constants/initState'

const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_STORE:
         console.log("Logging in store: " + action.payload.storeName );
         return {
             ...state,
             store: {
               storeId: action.payload.storeId,
               storeName: action.payload.storeName,
             },
         }

         default:
            return state;
    }
}
