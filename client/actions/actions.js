import * as types from '../constants/actionTypes'

export const loginUser = (userName, userId, phone) => ({
    type: types.LOGIN_USER,
    payload: {userName, userId, phone}
});

export const loginStore = (storeName, storeId) => ({
  type: types.LOGIN_STORE,
  payload: {storeName, storeId}
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
        .then(response => response.json())
        .then(response => {
            dispatch(loginUser(response.user_name, response.user_id, response.phone_number))
            }
        )
        .catch(err => console.log(err))

    }
  }
