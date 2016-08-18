// General Manager
var request = require('axios')
const BACKEND_URL = '/api/recipes';

let actions = {
    getRecipes: () => {
        return {
            // type: ['GET_RECIPES', 'GET_RECIPES_SUCCESS', 'GET_RECIPES_FAILURE']
            type: 'GET_RECIPES',
            promise: request.get(BACKEND_URL + '/')
        }
    },
    makeRecipe: (recipeParams) => {
      console.log("hello!" + BACKEND_URL);
        return {
            // type: ['ADD_RECIPE', 'ADD_RECIPE_SUCCESS', 'ADD_RECIPE_FAILURE']
            type: 'ADD_RECIPE',
            // title: recipeParams
            // console.log('rp',recipeParams)
            promise: request.post(BACKEND_URL, {
                    recipeParams: recipeParams,
                })
                .then((response) => {
                    console.log(response, 'got here')
                })
                .catch((response) => {
                    console.log(response)
                })
        }
    }
}


export default actions
