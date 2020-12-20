const fetch = require('node-fetch');
const api_host = process.env.REACT_APP_SPOONACULAR_HOST;
const api_key = process.env.REACT_APP_SPOONACULAR_KEY;

const search = {

    getRecipeByIngredients: (ingredients) => {

        let ingredientList = ingredients.join('%2C');
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" + "/recipes/findByIngredients?" +
            "ingredients=" + ingredientList +
            "&number=5&ranking=1&ignorePantry=true", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

    getSimilarRecipes: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id + "/similar", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

    getRandomRecipes: () => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

    getIngredientSubById: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/" +
            id + "/substitutes", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

    getIngredientSub: (ingredientName) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes?" + "ingredientName=" + ingredientName, {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        })
    },

    getRecipeInfo: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id + "/information", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

    getRecipeInstruction: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id + "/analyzedInstructions?stepBreakdown=true", {
            "method": "GET",
            "headers":  {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },
    getRecipeInfo: (id) => {
        console.log(this.spoonacular_headers)
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id +
            "/information", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            },
        });
    },

}

module.exports = {
    search
}