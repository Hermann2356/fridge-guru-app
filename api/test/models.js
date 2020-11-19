const {Ingredient, Category, Fridge} = require('../models');

const CRUD = {
    insertNewIngredient: () => {
        return Ingredient.create({
            id: 15,
            name: 'salmon',
            consistency: 'SOLID',
            fridgeSL: '1 day',
            cupboardSL: '1 day',
            freezerSL: '1 day',
            categoryId: 4
        });
    },


    getIngredients: () => {
        return Ingredient.findAll();
    },


    getIngredientByPK: () => {
        return Ingredient.findByPk(1);
    },


    updateIngredient: () => {
        return Ingredient.findByPk(2)
            .then(ingredient => {
                ingredient.name = 'white cod'
                ingredient.categoryId = 4;
                return ingredient.save();
            });
    },

    deleteIngredient: () => {
        return Ingredient.destroy({where: {name: 'salmon'}});
    },

    getCategoryByPK: () => {
        return Category.findByPk(1);
    },

    getCategories: () => {
        return Category.findAll();
    },

    deleteCategory: () => {
        return Category.destroy({where: {name: 'dairy'}});
    },

    updateCategory: () => {
        return Category.findByPk(4)
            .then(category => {
                category.name = 'seafood';
                return category.save();
            })
    },

    insertNewCategory: () => {
        return Category.create({
            id: 5,
            name: 'dairy'
        });
    },
    getFridgeIngredients: () => {
        return Fridge.findAll({where: {userId: 1}})
            .then(fridgeIngredients => {
                return Promise
                    .all(fridgeIngredients.map(ingredient => {
                        return Ingredient.findByPk(ingredient.ingredientId)
                    }));
            });
    },

    getOneFridgeIngredient: () => {
        return Fridge.findOne({where: {userId: 1, ingredientId: 1}});
    },

    insertNewFridgeIngredient: () => {
        return Fridge.create({
            ingredientId: 8,
            userId: 1
        });
    },

    updateFridgeIngredient: () => {
        return Fridge.findOne({where: {userId: 1, ingredientId: 8}})
            .then(fridgeIngredient => {
                fridgeIngredient.quantity = 20;
                return fridgeIngredient.save();
            });
    },

    deleteFridgeIngredient: () => {
        return Fridge.destroy({where: {ingredientId: 8}});
    }
}

module.exports = { CRUD };