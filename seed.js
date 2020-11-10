const db = require('./api/models');
const { Ingredient, Category } = db;

const INGREDIENT = [
    {id: 1, name: "Apple", description: "Its a red fruit", image: null, consistency: "Solid", fridgeSL: "1 month", cupboardSL: "4 days", freezerSL: "none", categoryId: 1}
];

const CATEGORY = [
    {id: 1, name: "fruit"}
];

const seed = () => {
    return db.sequelize.sync({force: true})
        .then(() => {
            // Create all the entries
            let categoryPromises = CATEGORY.map(c => Category.create(c));
            let ingredientPromises = INGREDIENT.map(i => Ingredient.create(i));

            return Promise.all([...ingredientPromises,...categoryPromises]);
        });
}

module.exports = seed;