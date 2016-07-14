import React, { Component } from 'react'
import Recipe from './Recipe'

class RecipeList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}

export default RecipeList
