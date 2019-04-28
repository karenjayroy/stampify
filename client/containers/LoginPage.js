import React from 'react'
import { connect } from 'react-redux'
import SignUp from '../components/SignUp'
import UserLogin from '../components/UserLogin'
import StoreLogin from '../components/StoreLogin'
import {Redirect} from 'react-router-dom'

import * as actions from '../actions/actions'



//Our stateful component aka container where login/signup child components are receiving their props from
const mapDispatchToProps = dispatch => ({
    signUp: (name, password, phoneNumber) => dispatch(actions.createUserAsync(name, password, phoneNumber)),
    userLogin: (name, password) => dispatch(actions.loginUserAsync(name, password))
})

const mapStateToProps = store => ({
    user: store.user,
    store: store.store
}) // should've called our shops something other than store >_<


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
        /* handle routing here.
        * If userId is not null, user is logged in so redirect to user page
        * If storeId is not null, store is logged in so redirect to store page
        * Otherwise show the login page
        */
        if(this.props.user.userId) {
          return <Redirect to="/user"></Redirect>
        } else if(this.props.store.storeId) {
          return <Redirect to="/store"></Redirect>;
        } else
          return(
              <div id="loginPage">
                <SignUp signUp={this.props.signUp}/>
                <UserLogin userLogin={this.props.userLogin}/>
                <StoreLogin/>
            </div>
          )
      }
}


export default connect (mapStateToProps, mapDispatchToProps)(LoginPage);
