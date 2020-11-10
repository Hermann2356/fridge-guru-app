const db = require('./api/models');
const { Ingredient, Category, Fridge, User } = db;

const CATEGORY = [
    {id: 1, name: "fruit"},
    {id: 2, name: "vegetable"},
    {id: 3, name: "poultry"}
];

const INGREDIENT = [
    {id: 1, name: "apple", image: null, consistency: "SOLID", fridgeSL: "30 days", cupboardSL: "4 days", freezerSL: "none", categoryId: 1},
    {id: 2, name: "banana", image: null, consistency: "SOLID", fridgeSL: "none", cupboardSL: "4 days", freezerSL: "none", categoryId: 1},
    {id: 3, name: "orange", image: null, consistency: "SOLID", fridgeSL: "14 days", cupboardSL: "7 days", freezerSL: "none", categoryId: 1},
    {id: 4, name: "grape", image: null, consistency: "SOLID", fridgeSL: "5 days", cupboardSL: "5 days", freezerSL: "none", categoryId: 1},
    {id: 5, name: "peaches", image: null, consistency: "SOLID", fridgeSL: "3 days", cupboardSL: "1 days", freezerSL: "none", categoryId: 1},

    {id: 6, name: "asparagus", image: null, consistency: "SOLID", fridgeSL: "5 days", cupboardSL: "none", freezerSL: "none", categoryId: 2},
    {id: 7, name: "beans", image: null, consistency: "SOLID", fridgeSL: "6 days", cupboardSL: "none", freezerSL: "none", categoryId: 2},
    {id: 8, name: "broccoli", image: null, consistency: "SOLID", fridgeSL: "7 days", cupboardSL: "none", freezerSL: "none", categoryId: 2},
    {id: 9, name: "cabbage", image: null, consistency: "SOLID", fridgeSL: "60 days", cupboardSL: "none", freezerSL: "none", categoryId: 2},
    {id: 10, name: "cauliflower", image: null, consistency: "SOLID", fridgeSL: "14 days", cupboardSL: "none", freezerSL: "none", categoryId: 2},

    {id: 11, name: "chicken", image: null, consistency: "RAW", fridgeSL: "6 days", cupboardSL: "none", freezerSL: "none", categoryId: 3},
    {id: 12, name: "turkey", image: null, consistency: "RAW", fridgeSL: "6 days", cupboardSL: "none", freezerSL: "none", categoryId: 3},
    {id: 13, name: "duck", image: null, consistency: "RAW", fridgeSL: "7 days", cupboardSL: "none", freezerSL: "none", categoryId: 3},
    {id: 14, name: "goose", image: null, consistency: "RAW", fridgeSL: "60 days", cupboardSL: "none", freezerSL: "none", categoryId: 3},


];

const FRIDGE = [
    {id: 1, ingredientId: 1, userId: 1},
    {id: 2, ingredientId: 3, userId: 1},
    {id: 3, ingredientId: 4, userId: 1},
    {id: 4, ingredientId: 5, userId: 1},
    {id: 5, ingredientId: 6, userId: 1},
    {id: 6, ingredientId: 7, userId: 1},
    {id: 7, ingredientId: 9, userId: 1},
    {id: 8, ingredientId: 12, userId: 1},
    {id: 9, ingredientId: 15, userId: 1},
    {id: 10, ingredientId: 2, userId: 1},
]

const USER = [
    {firstName: "Hermann", lastName: "Sterling", email: "hermannsterling@gmail.com"}
]

const seed = () => {
    return db.sequelize.sync({force: true})
        .then(() => {
            // Create all the entries
            let userPromises = USER.map(u => User.create(u));
            let categoryPromises = CATEGORY.map(c => Category.create(c));
            let ingredientPromises = INGREDIENT.map(i => Ingredient.create(i));
            let fridgePromises = FRIDGE.map(f => Fridge.create(f));

            return Promise.all([...ingredientPromises, ...categoryPromises]);

            // return Promise.all([...userPromises, ...categoryPromises, ...ingredientPromises, ...fridgePromises]);
        });
        // .then(() =>{
        //     // Create the associations
        //     let associationPromises = FRIDGE.map(f =>{
        //         let userPromise = User.findByPk(f.userId);
        //         let ingredientPromise = Ingredient.findByPk(f.ingredientId);
        //         return Promise.all([userPromise, ingredientPromise])
        //             .then(([users, ingredients]) =>{
        //                 return users.addIngredient(ingredients);
        //             })
        //     });
        // });

// .then(() => {
//         // Create the associations
//         let associationPromises = MOVIES_ACTORS.map(ma => {
//             let moviePromise = Movie.findByPk(ma.movieId);
//             let actorPromise = Actor.findByPk(ma.actorId);
//             return Promise.all([moviePromise, actorPromise])
//                 .then(([movie, actor]) => {
//                     return movie.addActor(actor);
//                 })
//         });
//         return Promise.all(associationPromises);
//     });
}

module.exports = seed;