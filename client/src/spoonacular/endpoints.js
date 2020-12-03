const fetch = require('node-fetch');
const api_host = process.env.REACT_APP_API_HOST;
const api_key = process.env.REACT_APP_API_KEY;
const search = {

    getRecipeByIngredients: (ingredients, optional) => {

        let ingredientList = ingredients.join('%2C');
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" + "/recipes/findByIngredients?" +
            "ingredients=" + ingredientList +
            "&number=5&ranking=1&ignorePantry=true", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": api_key,
                "x-rapidapi-host": api_host,
            }
        });
    },

    // getSimilarRecipes: (id) => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    //         id + "/similar", {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     });
    // },
    //
    // getRandomRecipes: () => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert", {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     });
    // },
    //
    // getIngredientSubById: (id) => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/" +
    //         id + "/substitutes", {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     });
    // },
    //
    // getIngredientSub: (ingredientName) => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes?" + "ingredientName=" + ingredientName, {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     })
    // },
    //
    // getRecipeInfo: (id) => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    //         id + "/information", {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     });
    // },
    //
    getRecipeInstruction: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id + "/analyzedInstructions?stepBreakdown=true", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        });
    },
    getRecipeInfo: (id) => {
        return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
            id +
            "/information", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        });
    },
}

const compute = {
    // summarizeRecipe: (id) => {
    //     return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
    //         id + "/summary", {
    //         "method": "GET",
    //         "headers": this.HEADERS
    //     });
    // }
}


module.exports = {
    search,
    compute
}