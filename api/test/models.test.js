const seed = require('../../seed');
const {Ingredient, Category, User, Fridge} = require('../models');
const db = require('../models');

const {
    getIngredients,
    getIngredientByPK,
    getCategoryByPK,
    getCategories,
    getOneFridgeIngredient,
    deleteCategory,
    updateCategory,
    insertNewCategory,
    getFridgeIngredients,
    insertNewIngredient,
    updateIngredient,
    deleteIngredient,
    insertNewFridgeIngredient,
    updateFridgeIngredient,
    deleteFridgeIngredient
} = require('./models');



describe('1) Model Usage', () => {
    beforeAll(() => {
        return seed(db);
    })

    test('insert a new ingredient', async () => {
        await insertNewIngredient();
        ingredient = await Ingredient.findAll();
        expect(ingredient.length).toBe(15);
    });

    test('update an ingredient', async () => {
        ingredient = await updateIngredient();
        expect([ingredient.name, ingredient.categoryId]).toEqual(['white cod', 4]);
    });

    test('delete salmon ingredient was added', async () => {
        await deleteIngredient();
        ingredient = await Ingredient.findAll();
        expect(ingredient.length).toBe(14);
    });

    test('get the number of ingredients', async () => {
        ingredient = await getIngredients();
        expect(ingredient.length).toEqual(14);

    });

    test('get apple ingredient', async () => {
        ingredient = await getIngredientByPK();
        expect(ingredient.name).toEqual('apple');

    });

    test('insert a new category', async () => {
        await insertNewCategory();
        category = await Category.findAll();
        expect(category.length).toBe(5);
    });

    test('update an category', async () => {
        category = await updateCategory();
        expect(category.name).toEqual('seafood');
    });

    test('delete salmon ingredient was added', async () => {
        await deleteCategory();
        category = await Category.findAll();
        expect(category.length).toBe(4);
    });

    test('get the number of category', async () => {
        category = await getCategories();
        expect(category.length).toEqual(4);

    });

    test('get fruit category', async () => {
        category = await getCategoryByPK();
        expect(category.name).toEqual('fruit');

    });

    test('get the number of fridge ingredients for Hermann Sterling', async () => {
        fridgeIngredients = await getFridgeIngredients();
        expect(fridgeIngredients.length).toBe(10);

    });

    test('get apple fridge ingredients from Hermann Sterling', async () => {
        fridgeIngredient = await getOneFridgeIngredient();
        ingredient = await Ingredient.findByPk(fridgeIngredient.ingredientId)
        expect(ingredient.name).toEqual('apple');

    });

    test('insert a new fridge ingredient', async () => {
        await insertNewFridgeIngredient();
        fridgeIngredient = await Fridge.findAll({where: {userId: 1}});
        expect(fridgeIngredient.length).toBe(11);
    });

    test('update broccoli fridge ingredient in Hermann fridge', async () => {
        await updateFridgeIngredient();
        fridgeIngredient = await Fridge.findOne({where: {userId: 1, ingredientId:8}});
        expect(fridgeIngredient.quantity).toBe(20);
    });

    test('delete broccoli from Hermann fridge', async () => {
        await deleteFridgeIngredient();
        fridgeIngredients = await Fridge.findAll({where: { userId: 1 }});
        expect(fridgeIngredients.length).toBe(10);
    });
});


