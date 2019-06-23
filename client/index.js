import React from 'react'
import { render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import StampifyApp from './reducers/CombineReducers'
import App from './containers/App'
import { Provider } from 'react-redux'

require('./styles.css')

const store = createStore(StampifyApp, applyMiddleware(thunk))


render(<App store={store}/>, document.getElementById('root'))
