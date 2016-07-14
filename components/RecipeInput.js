import React, { Component, PropTypes } from 'react'

class RecipeInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
        title: '',
        descript: '',
        ingred: ''
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    this.setState(newState)
    console.log(this.state)
  }

  handleSubmit(event) {
      event.preventDefault();

        // let errors = [];
        console.log(this.state)
        let recipeParams = {
            id: this.props.id,
            title: this.state.title,
            descript: this.state.descript,
            ingred: this.state.ingred
        }
        // console.log('this',recipeParams)

      this.props.actions.makeRecipe(recipeParams)
        // recipeParams.id = this.props.id
        // recipeParams.title = this.state.title
        // recipeParams.descript = this.state.descript
        // recipeParams.ingred = this.state.ingred

      }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="What's your recipe for?"
          value={this.state.title}
          onChange={this.handleChange.bind(this, 'title')}
        />{' '}
        <input
          type="text"
          placeholder="Describe it!"
          value={this.state.descript}
          onChange={this.handleChange.bind(this, 'descript')}
        />{' '}
        <input
          type="text"
          placeholder="What are the ingredients?"
          value={this.state.ingred}
          onChange={this.handleChange.bind(this, 'ingred')}
        />{' '}
        <input type="submit" text="Submit"/>
      </form>
      </div>
    )
  }
}

export default RecipeInput
