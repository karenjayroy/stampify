import React from 'react'
import { render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import StampifyApp from './reducers/userReducer'
import App from './containers/App'


const store = createStore(StampifyApp, applyMiddleware(thunk))

render(<App store={store}/>, document.getElementById('root'))


