import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './LoginPage';


//redux-router setup
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
      <Route path="/" component={LoginPage} />
      {/* <Route path='/user' component={}/> */}
      {/* <Route path='/store' component={}/> */}
      </div>
    </Router>
  </Provider>
)
//redux-router setup
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root