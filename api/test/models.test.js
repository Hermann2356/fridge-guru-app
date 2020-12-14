const seed = require('../../seed');
const {Ingredient, Category, User, Fridge} = require('../models');
const db = require('../models');
const { search } = require('../../client/src/spoonacular/endpoints');
const { CRUD } = require('./models');


describe('1) Model Usage', () => {
    beforeAll(() => {
        return seed(db);
    })

    test('insert a new ingredient', async () => {
        await CRUD.insertNewIngredient();
        ingredient = await Ingredient.findAll();
        expect(ingredient.length).toBe(15);
    });

    test('update an ingredient', async () => {
        ingredient = await CRUD.updateIngredient();
        expect([ingredient.name, ingredient.categoryId]).toEqual(['white cod', 4]);
    });

    test('delete salmon ingredient was added', async () => {
        await CRUD.deleteIngredient();
        ingredient = await Ingredient.findAll();
        expect(ingredient.length).toBe(14);
    });

    test('get the number of ingredients', async () => {
        ingredient = await CRUD.getIngredients();
        expect(ingredient.length).toEqual(14);

    });

    test('get apple ingredient', async () => {
        ingredient = await CRUD.getIngredientByPK();
        expect(ingredient.name).toEqual('apple');

    });

    test('insert a new category', async () => {
        await CRUD.insertNewCategory();
        category = await Category.findAll();
        expect(category.length).toBe(5);
    });

    test('update an category', async () => {
        category = await CRUD.updateCategory();
        expect(category.name).toEqual('seafood');
    });

    test('delete salmon ingredient was added', async () => {
        await CRUD.deleteCategory();
        category = await Category.findAll();
        expect(category.length).toBe(4);
    });

    test('get the number of category', async () => {
        category = await CRUD.getCategories();
        expect(category.length).toEqual(4);

    });

    test('get fruit category', async () => {
        category = await CRUD.getCategoryByPK();
        expect(category.name).toEqual('fruit');

    });

    test('get the number of fridge ingredients for Hermann Sterling', async () => {
        fridgeIngredients = await CRUD.getFridgeIngredients();
        expect(fridgeIngredients.length).toBe(10);

    });

    test('get apple fridge ingredients from Hermann Sterling', async () => {
        fridgeIngredient = await CRUD.getOneFridgeIngredient();
        ingredient = await Ingredient.findByPk(fridgeIngredient.ingredientId)
        expect(ingredient.name).toEqual('apple');

    });

    test('insert a new fridge ingredient', async () => {
        await CRUD.insertNewFridgeIngredient();
        fridgeIngredient = await Fridge.findAll({where: {userId: 1}});
        expect(fridgeIngredient.length).toBe(11);
    });

    test('update broccoli fridge ingredient in Hermann fridge', async () => {
        await CRUD.updateFridgeIngredient();
        fridgeIngredient = await Fridge.findOne({where: {userId: 1, ingredientId:8}});
        expect(fridgeIngredient.quantity).toBe(20);
    });

    test('delete broccoli from Hermann fridge', async () => {
        await CRUD.deleteFridgeIngredient();
        fridgeIngredients = await Fridge.findAll({where: { userId: 1 }});
        expect(fridgeIngredients.length).toBe(10);
    });

    // test('get list of recipes by ingredient', async () => {
    //
    //     recipes = await search.getRecipeByIngredients(['broccoli', 'chicken'])
    //         .then(res => {
    //             return res.json();
    //         });
    //     expect(recipes).toBe(10);
    // });

    // test('get instructions of recipe', async () => {
    //
    //     instructions = await search.getRecipeInstruction(324694)
    //         .then(res => {
    //             return res.json();
    //         });
    //     expect(instructions).toBe(10);
    // });

    test('get number of user returned by email', async () => {
        user = await CRUD.getUserByEmail();
        expect(user.length).toBe(1);

    });

    test('get number of user returned by username', async () => {
        user = await CRUD.getUserByUsername();
        expect(user.length).toBe(1);

    });
});


