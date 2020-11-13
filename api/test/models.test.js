const seed = require('../../seed');
const db = require('./models');
const { Ingredient, Category, User, Fridge } = db;


const {
    getAllIngredients,
    getAllCategories,
    getAllUsers,
    getAllUserIngredients
} = require('./models');



describe('1) Model Usage', () => {
    beforeAll(() => {
        return seed(db);
    })


    test('get all ingredient', async () => {
        expect(await getAllIngredients()).toEqual(14);

    });

    test('get all category', async () => {
        expect(await getAllCategories()).toEqual(3);

    });

    test('get all user', async () => {
        expect(await getAllUsers()).toEqual(1);
    });

    test('get all user (Hermann Sterling) ingredients', async () => {
        expect(await  getAllUserIngredients()).toEqual(["apple","orange","grape","peaches","asparagus","beans","cabbage","turkey","goose","banana"]);
    })
});

