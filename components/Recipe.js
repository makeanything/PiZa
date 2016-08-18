import React, { Component } from 'react'

class Recipe extends Component {
  render() {
    return(
      <li>
        <p>{this.props.recipe.title}</p>
        <p>{this.props.recipe.descript}</p>
        <p>{this.props.recipe.ingred}</p>
      </li>
    )
  }
}

export default Recipe
