const {Ingredient, Category, User, Fridge} = require('../models');
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;
const fetch = require("node-fetch");

function insertNewIngredient() {
    return Ingredient.create({
        id: 15,
        name: 'salmon',
        consistency: 'SOLID',
        fridgeSL: '1 day',
        cupboardSL: '1 day',
        freezerSL: '1 day',
        categoryId: 4
    });
}



function getIngredients() {
    return Ingredient.findAll();
}


function getIngredientByPK() {
    return Ingredient.findByPk(1);
}



function updateIngredient() {
    return Ingredient.findByPk(2)
        .then(ingredient => {
            ingredient.name = 'white cod'
            ingredient.categoryId = 4;
            return ingredient.save();
        });
}

function deleteIngredient() {
    return Ingredient.destroy({where: {name: 'salmon'}});
}

function getCategoryByPK() {
    return Category.findByPk(1);
}

function getCategories() {
    return Category.findAll();
}

function deleteCategory() {
    return Category.destroy({where: {name: 'dairy'}});
}

function updateCategory() {
    return Category.findByPk(4)
        .then(category => {
            category.name = 'seafood';
            return category.save();
        })
}

function insertNewCategory() {
    return Category.create({
        id: 5,
        name: 'dairy'
    });
}

function getFridgeIngredients() {
    return Fridge.findAll({where: {userId: 1}})
        .then(fridgeIngredients => {
            return Promise
                .all(fridgeIngredients.map(ingredient => {
                    return Ingredient.findByPk(ingredient.ingredientId)
                })) ;
        });
}

function getOneFridgeIngredient() {
    return Fridge.findOne({ where: { userId: 1, ingredientId: 1 } });
}

function insertNewFridgeIngredient() {
    return Fridge.create({
        ingredientId: 8,
        userId: 1
    });
}

function updateFridgeIngredient() {
    return Fridge.findOne({ where: { userId:1, ingredientId:8 } })
        .then(fridgeIngredient => {
            fridgeIngredient.quantity = 20;
            return fridgeIngredient.save();
        });
}

function deleteFridgeIngredient() {
    return Fridge.destroy({ where: { ingredientId:8 } });
}

function getRecipeByIngredients() {
    let ingredients = 'ingredients=' + ['broccoli', 'chicken', 'asparagus'].join('%C')
    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?" +
        //"ingredients=apples%2Cflour%2Csugar" +
        ingredients +
        "&number=5&ranking=1&ignorePantry=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0056010829msh4d04f8cc38de15dp1d2058jsn096cd683f0a6",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            // "x-rapidapi-key": API_KEY,
            // "x-rapidapi-host": API_HOST
        }
    })
        .then(response => {
            return response.json();
        });
}


module.exports = {
    getIngredients,
    getCategoryByPK,
    getCategories,
    deleteCategory,
    updateCategory,
    insertNewCategory,
    getIngredientByPK,
    insertNewIngredient,
    updateIngredient,
    deleteIngredient,
    getFridgeIngredients,
    getOneFridgeIngredient,
    insertNewFridgeIngredient,
    updateFridgeIngredient,
    deleteFridgeIngredient,
    getRecipeByIngredients
};