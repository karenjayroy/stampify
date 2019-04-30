import React from 'react'


// Login box for the user
const UserLogin = props => (
    <div id="userLogin">
        <h2>User Login</h2>
        <input id="userLoginName" type="text" placeholder="name"></input>
        <input id="userLoginPassword" type="password" placeholder="password"></input>
        <button onClick={(e) => {
            props.userLogin(document.getElementById("userLoginName").value,
                                 document.getElementById("userLoginPassword").value)
          }}>Submit</button>
    </div>
)




export default UserLogin;
