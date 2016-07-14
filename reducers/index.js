import { combineReducers } from 'redux'
// import { reduxReactFirebase, firebaseStateReducer } from 'redux-react-firebase'
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  recipes: recipeReducer
})

export default rootReducer
