const {Ingredient, Category, User, Fridge} = require('../models');
// Return the number of ingredients
function getAllIngredients() {
    return Ingredient.findAll().then(ingredients => {
            return ingredients.length;
        }
    );
}

// Return the number of categories
function getAllCategories(){
    return Category.findAll().then(categories => {
        return categories.length;
    });
}

// Return the number of users
function getAllUsers() {
    return User.findAll().then(users => {
        return users.length;
    });
}

// Return an array of ingredients from user Hermann Sterling
function getAllUserIngredients() {
    return Fridge.findAll({where:{ userId:1 }})
        .then(items => {
            return items.map(item =>{
                return item.ingredientId;
            })
        })
        .then(ingredients => {
           return Ingredient.findByPk(ingredients[0]).name;
        })

}

module.exports = {
    getAllIngredients,
    getAllCategories,
    getAllUsers,
    getAllUserIngredients
};