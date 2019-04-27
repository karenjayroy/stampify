import React from 'react'




//child component to the LoginPage container
const SignUp = props => (
    <div id="signUp">
        Sign Up
        <input id="signUpName" type="text" placeholder="name"></input>
        <input id="signUpPassword"type="password" placeholder="password"></input>
        <input id="phoneNumber"type="tel" placeholder="phone#"></input>
        <button onClick={e => props.signUp(document.getElementById("signUpName").value, document.getElementById("signUpPassword").value, document.getElementById("phoneNumber").value)}>Submit</button>
    </div>
)




export default SignUp;