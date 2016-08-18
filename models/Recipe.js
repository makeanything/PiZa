"use strict"

var mongoose = require('mongoose')

var Schema = mongoose.Schema
var recipeSchema = Schema({
  id: String,
  title: String,
  pic: String,
  descript: String,
  ingred: Array,

  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;
