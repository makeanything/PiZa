// Worker

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../components/App'
import configureStore from '../redux/store'
import { connect } from 'react-redux'
// import { firebase, helps } from 'redux-react-firebase'

let initialState = {
  recipes: [{
    id: 0,
    pic: 'pic goes here',
    title: 'Omelette',
    descript: 'Breakfast classic',
    ingred: ['Eggs', 'Vegan Butter']
  }]
}

// Takes the from store.js and brings it in here
let store = configureStore(initialState)

render(
  // This wraps the Store around App.js
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('App')
)
