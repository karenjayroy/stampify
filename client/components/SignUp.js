import React from 'react'
import {Link} from 'react-router-dom';



//child component to the LoginPage container
// We use vanilla js DOM functions to get variables from text inputs
const SignUp = props => (
    <div id="signUp">
        <h2>New User Sign Up</h2>
        <input id="signUpName" type="text" placeholder="name"></input>
        <input id="signUpPassword"type="password" placeholder="password"></input>
        <input id="phoneNumber"type="tel" placeholder="phone#"></input>
        <button onClick={e => props.signUp(document.getElementById("signUpName").value, document.getElementById("signUpPassword").value, document.getElementById("phoneNumber").value)}>Submit</button>
    </div>
)




export default SignUp;
