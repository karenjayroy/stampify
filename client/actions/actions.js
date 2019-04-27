import * as types from '../constants/actionTypes'

export const createUser = (userName, userPassword, phone) => ({
    type: types.CREATE_USER,
    payload: {userName, userPassword, phone}
});



export const createUserAsync = (name, password, phone) => {
    return function(dispatch, getState) {
        console.log('insde create user async function')
        return fetch('/signup', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: {name, password, phone}
        })
        .then(response => response.json())
        .then( response => {
            console.log('response', response)
            dispatch(createUser(name, password, phone))
            }
        )
        .catch(err => console.log(err))

    }
}