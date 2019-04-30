import React from 'react'
import { render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import StampifyApp from './reducers/CombineReducers'
import App from './containers/App'
require('./styles.css')

//connects thunk
const store = createStore(StampifyApp, applyMiddleware(thunk))


render(<App store={store}/>, document.getElementById('root'))
