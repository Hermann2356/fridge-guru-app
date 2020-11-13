const {Ingredient, Category, User, Fridge} = require('../models');

// Return the number of ingredients
function getNumIngredients() {
    return Ingredient.findAll().then(ingredients => {
            return ingredients.length;
        }
    );
}

// Return the number of categories
function getNumCategories() {
    return Category.findAll().then(categories => {
        return categories.length;
    });
}

// Return the number of users
function getNumUsers() {
    return User.findAll().then(users => {
        return users.length;
    });
}

// Return the number of ingredients of user Hermann Sterling
function getNumUserIngredients() {
    return Fridge.findAll({where: {userId: 1}})
        .then(items => {
            return items.length;
        });
}

// Return the number of ingredients of user Hermann Sterling
function getAllUserIngredients() {
    let fridgeIngredients = Fridge.findAll({where: {userId: 1}}).then(items => items.map(i => {return i.ingredientId}));
    let ingredients = fridgeIngredients.map(i => {return Ingredient.findByPk(i)});

    return ingredients.then(i => i.map(i => {return i}));

}

module.exports = {
    getNumIngredients,
    getNumCategories,
    getNumUsers,
    getAllUserIngredients
};