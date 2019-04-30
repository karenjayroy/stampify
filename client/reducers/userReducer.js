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
               userPhone: action.payload.phone,
               loyaltyCards: action.payload.loyaltyCards
         }

         case types.LOGOUT:
          return initialState;

         case types.ADD_CARD:
            // console.log(state.);
            const newLoyaltyCard = state.loyaltyCards.slice(0);
            // console.log('this is before', newLoyaltyCard);
            newLoyaltyCard.push({store_name: action.payload.storeName, stamp_count: 0})
            // console.log('this is afterrrr', newLoyaltyCard);

            return {
                ...state,
                  loyaltyCards: newLoyaltyCard
            }

         default:
            return state;
    }
}

export default userReducer;
