import * as types from '../constants/actionTypes'

//our reducer for users
//sets up an initial state

const initialState = {
    userId: null,
    userName: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_USER:
         return {
             ...state
         } 
         
         default: 
            return state;  
    }
}

export default userReducer;