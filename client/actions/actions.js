import * as types from '../constants/actionTypes'

export const createUser = (userName, userId, phone) => ({
    type: types.CREATE_USER,
    payload: {userName, userId, phone}
});


export const createUserAsync = (name, password, phone) => {
    return function(dispatch, getState) {
        console.log()
        return fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({"name": name, "password": password, "phone_number" : phone})
        })
        .then(response => response.json())
        .then(response => {
            dispatch(createUser(response[0].user_name, response[0].user_id, response[0].phone_number))
            }
        )
        .catch(err => console.log(err))

    }
}