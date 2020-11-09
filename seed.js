const db = require('./api/models');
const { ingredient, category } = db;

// // const GENRES = [
// //     {id: 1, name: 'Action'},
// //     {id: 2, name: 'Comedy'},
// //     {id: 3, name: 'Drama'},
// // ];
//
//
const INGREDIENT = [
    {id: 1, name: "Apple", description: "Its a red fruit", image: null, consistency: "Solid", fridgeSL: "1 month", cupboardSL: "4 days", freezerSL: "none"}
];
//
// const CATEGORY = [
//     {},
//     {},
//     {},
//     {},
//     {},
// ];
//
//
//
//
//
const seed = () => {
    return db.sequelize.sync({force: true})
        .then(() => {
            // Create all the entries
            //let genrePromises = GENRES.map(g => Genre.create(g));
            // let moviePromises = MOVIES.map(m => Movie.create(m));
            // let actorPromises = ACTORS.map(a => Actor.create(a));

            let ingredientPromises = INGREDIENT.map(i => Ingredient.create(i));
            //let categoryPromises = CATEGORY.map(c => Category.create(c));
            return Promise.all([...ingredientPromises, ...categoryPromises]);
        });
        // .then(() => {
        //     // Create the associations
        //     let associationPromises = MOVIES_ACTORS.map(ma => {
        //         let moviePromise = Movie.findByPk(ma.movieId);
        //         let actorPromise = Actor.findByPk(ma.actorId);
        //         return Promise.all([moviePromise, actorPromise])
        //             .then(([movie, actor]) => {
        //                 return movie.addActor(actor);
        //             })
        //     });
        //     return Promise.all(associationPromises);
        // });
}

module.exports = seed;