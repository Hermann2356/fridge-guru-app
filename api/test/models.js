const {Ingredient, Category, User, Fridge} = require('../models');

function getAllIngredients() {
    return Ingredient.findAll().then(ingredients => {
            return ingredients.length;
        }
    );
}


module.exports = {
    getAllIngredients
};