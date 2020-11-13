const seed = require('../../seed');
const db = require('./models');


const {
    getNumIngredients,
    getNumCategories,
    getNumUsers,
    getAllUserIngredients
} = require('./models');



describe('1) Model Usage', () => {

    // test th
    test('get the number of ingredients', async () => {
        expect(await getNumIngredients()).toEqual(14);

    });

    test('get the number of categories', async () => {
        expect(await getNumCategories()).toBe(3);

    });

    test('get the number of users', async () => {
        expect(await getNumUsers()).toBe(1);
    });

    test('get the fridge items of users hermann sterling', async () => {
        expect(await getAllUserIngredients()).toBe("2");
    });



});


