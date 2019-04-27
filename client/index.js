import React from 'react'
import { render} from 'react-dom'
import { createStore } from 'redux'
import StampifyApp from './reducers/reducers'
import MainContainer from './containers/MainContainer'


const store = createStore(StampifyApp)

render(<MainContainer store={store}/>, document.getElementById('root'))


