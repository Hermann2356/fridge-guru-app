
const { Ingredient, Category, User, Fridge } = require('../models');
const seed = require('../../seed');


const { getAllIngredients } = require('./models');



describe('1) Model Usage', () => {
    beforeAll(() => {
        return seed();
    })


    test('get all ingredient', async () => {
        expect(await getAllIngredients()).toEqual(14);

    })

})