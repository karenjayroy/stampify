import * as types from '../constants/actionTypes'
//sets up an initial state
import initialState from '../constants/initState'

//our reducer for users


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_USER:
         return {
             ...state,
             user: {
               userId: action.payload.userId,
               userName: action.payload.userName,
               userPhone: action.payload.phone
             },
         }

         default:
            return state;
    }
}

export default userReducer;
