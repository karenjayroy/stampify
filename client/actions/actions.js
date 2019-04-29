import * as types from '../constants/actionTypes'

export const loginUser = (userName, userId, phone, loyaltyCards) => ({
    type: types.LOGIN_USER,
    payload: {userName, userId, phone, loyaltyCards}
});

export const loginStore = (storeName, storeId) => ({
  type: types.LOGIN_STORE,
  payload: {storeName, storeId}
})

export const stampSuccess = (success) => ({
  type: types.STAMP_SUCCESS,
  payload: {success}
})

export const addCard = (storeName, userId) => ({
    type: types.ADD_CARD,
    payload: {storeName, userId}
})

export const logout = () => ({
  type: types.LOGOUT,
})

// signup a new user by name, password, phone number
export const createUserAsync = (name, password, phone) => {
    return function(dispatch, getState) {
        return fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"name": name, "password": password, "phone_number" : phone})
        })
        .then(response => response.json())
        .then(response => {
            dispatch(loginUser(response.user_name, response.user_id, response.phone_number))
            }
        )
        .catch(err => console.log(err))

    }
};

export const loginUserAsync = (name, password) => {
    return function(dispatch, getState) {
        console.log()
        return fetch('http://localhost:3000/userlogin', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"name": name, "password": password})
        })
        .then(response => {
            console.log(response);
            return response.json()})
        .then(response => {
            console.log('this is the response body', response)
            dispatch(loginUser(response.user.user_name, response.user.user_id, response.user.phone_number))
            }
        )
        .catch(err => console.log(err))

    }
  }

  // trying to add new card on user page from database. added 4/28
  export const addCardAsync = (userName, storeName) => {
    return function(dispatch, getState) {
        console.log()
        return fetch('http://localhost:3000/store/:store', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"name": userName, "store": storeName }) // double check how to use params*******
        })
        .then(response => response.json())
        .then(response => {
            dispatch(addCard(response.user_id, response.store_name))
            }
        )
        .catch(err => console.log(err))

    }
  };

  export const loginStoreAsync = (name, password) => {
      return function(dispatch, getState) {
          console.log()
          return fetch('http://localhost:3000/storelogin', {
              method: "POST",
              headers: {"content-type": "application/json"},
              body: JSON.stringify({"name": name, "password": password})
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
              dispatch(loginStore(response.store_name, response.store_id));
              }
          )
          .catch(err => console.log(err))

      }
  };

  export const addStampAsync = (storeId, phone) => {
      return function(dispatch, getState) {
          console.log()
          return fetch('http://localhost:3000/stamp/' + phone, {
              method: "PUT",
              headers: {"content-type": "application/json"},
              body: JSON.stringify({"storeid": storeId})
          })
          .then(response => response.json())
          .then(response => {
                dispatch(stampSuccess(response.rowCount === 1));
              }
          )
          .catch(err => console.log(err))

      }
  };
