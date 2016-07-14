import React from 'react'
import { Router, Redirect } from 'react-router'
import App from './components/App'
import RecipeInput from './components/RecipeInput'

export default (
  <Route path="/" name="app" component={App}>
      <Route path="/recipes" component={RecipeInput}>
      </Route>
  </Route>
)
