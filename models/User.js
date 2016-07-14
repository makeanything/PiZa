var mongoose = require('mongoose')

let Schema = mongoose.Schema
let userSchema = Schema({
  id: String,
  user: String,
  recipes: [type: mongoose.Schema.Types.ObjectId, ref: 'Recipe']
})

const Recipe = mongoose.model('User', userSchema)

module.exports = User;
