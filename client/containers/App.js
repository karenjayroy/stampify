import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage';
import UserPage from './UserPage'


//redux-router setup
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path='/user' component={UserPage}/>
        {/* <Route path='/store' component={}/> */}
      </Switch>
    </Router>
  </Provider>
)
//redux-router setup
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root