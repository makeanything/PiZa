var mongoose = require('mongoose');
var express = require('express');
var Recipe = require('../models/Recipe');


var router = express.Router();
console.log("ok")
// Start //
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the api server'
  });
});

/* Recipes */
// Base route: /api/v1/recipes

 // getRecipes()
router.get('/recipes/:id', (req, res) => {
  let recipeId = req.params.id;
  Recipe.find({_id: recipeId}, (err, recipes) => {
    if(err) res.status(400).send("Sorry couldn't process that request.")
    else res.json(recipes)
  })
})

// makeRecipe()
router.post('/recipes', (req, res) => {
  let newRecipe = new Recipe(req.body.recipeParams);
  console.log('we made it', req.body.recipeParams)
  let id = req.body.recipeParams.id;

    newRecipe.save(function(err) {
      if(err) {
        res.status(400).send("Error saving")
      } else {
        res.json(newRecipe);
      }
  })
})

// deleteRecipe()
router.delete('/recipes/:id', (req, res) => {
  Recipe.findByIdAndRemove(id, (err) => {
    if(err) res.status(400).send(err);
    else res.status(200).send('successful!');
  })
})

module.exports =    router;
