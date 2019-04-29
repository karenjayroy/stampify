import * as types from '../constants/actionTypes'
//sets up an initial state


//our reducer for users
const initialState = {
      userId: null,
      userName: '',
      userPhone: null,
      loyaltyCards: []
}


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_USER:
            console.log('this is hitting');
         return {
             ...state,
               userId: action.payload.userId,
               userName: action.payload.userName,
               userPhone: action.payload.phone

         }

         case types.ADD_CARD:
            const newLoyaltyCard = loyaltyCards.slice(0);
            newLoyaltyCard.push(action.payload.storeName)
            return {
                ...state,
                  loyaltyCards: newLoyaltyCard
            }

         default:
            return state;
    }
}

export default userReducer;
