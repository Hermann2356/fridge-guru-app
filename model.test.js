//const { Genre, Movie, Actor } = require('./models');
const { Ingredient, Category } = require('./api/models');
const seed = require('./seed');


const { getAllIngredients } = require('./model.js');



describe('2) Model Usage', () => {
    beforeAll(() => {
        return seed();
    })


    test('get all ingredient', async () => {

        expect(await getAllIngredients()).toEqual(["Apple"]);
    })

})