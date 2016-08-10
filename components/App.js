// The Business

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import RecipeList from './RecipeList'
import RecipeInput from './RecipeInput'
import Splash from './Splash'
import SignUpButton from './SignUpButton'
import ReactBootstrap, { Button } from 'react-bootstrap'

class App extends Component {

  render() {
    return(
      <div>
        <Splash/>
        <br/>
        <SignUpButton/>
        {/* <RecipeInput actions={this.props.actions}/>
        <RecipeList actions={this.props.actions} recipes={this.props.recipes}/> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
