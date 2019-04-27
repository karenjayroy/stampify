import * as types from '../constants/actionTypes'

//our reducer for users
//sets up an initial state

const initialState = {
    userId: null,
    userName: '',
    userPhone: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_USER:
            const userId= action.payload.userId
            const userName= action.payload.userName
            const userPhone= action.payload.phone
         return {
             ...state,
             userId,
             userName,
             userPhone
         } 

         default: 
            return state;  
    }
}

export default userReducer;