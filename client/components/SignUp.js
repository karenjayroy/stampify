import React from 'react'




//child component to the LoginPage container
const SignUp = props => (
    <div id="signUp">
        Sign Up
        <input type="text" placeholder="name"></input>
        <input type="password" placeholder="password"></input>
        <input type="tel" placeholder="phone#"></input>
        <button onClick={props.signUp}>Submit</button>
    </div>
)




export default SignUp;