import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import UserLogin from '../components/UserLogin'
import StoreLogin from '../components/StoreLogin'

import * as actions from '../actions/actions'


//Our stateful component aka container where login/signup child components are receiving their props from
const mapDispatchToProps = dispatch => ({
    signUp: (name='Karen', password='pw', phone=21) => dispatch(actions.createUserAsync(name, password, phone))
})



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
          return(
              <div id="loginPage">
                <SignUp signUp={this.props.signUp}/>
                <UserLogin/>
                <StoreLogin/>
            </div>
          )
      }
}


export default connect (null, mapDispatchToProps)(LoginPage);