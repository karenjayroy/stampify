import React from 'react'



const UserLogin = props => (
    <div id="userLogin">
        User Login
        <input id="userLoginName" type="text" placeholder="name"></input>
        <input id="userLoginPassword" type="password" placeholder="password"></input>
        <button onClick={(e) => {
            props.userLogin(document.getElementById("userLoginName").value,
                                 document.getElementById("userLoginPassword").value)
          }}>Submit</button>
    </div>
)




export default UserLogin;
