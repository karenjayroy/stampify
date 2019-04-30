import React from 'react'


// Login box for the Store
const StoreLogin = props => (
    <div id="storeLogin">
        <h2>Store Login</h2>
        <input id="storeLoginName" type="text" placeholder="name"></input>
        <input id="storeLoginPassword" type="password" placeholder="password"></input>
        <button onClick={(e) => {
            props.storeLogin(document.getElementById("storeLoginName").value,
                             document.getElementById("storeLoginPassword").value)
          }}>Submit</button>
    </div>
)




export default StoreLogin;
