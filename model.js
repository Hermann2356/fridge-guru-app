const {Ingredient, Category} = require('./api/models');
// const db = require('./models');
// const Movie = db.Movie;
// const Actor = db.Actor;
// const Genre = db.Genre;
/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
// function insertNewGenre() {
//     return Genre.create({name: 'Pyschological'});
// }
// function insertNewIngredient() {
//     return Ingredient.create({});
// }

// /*
//   currently, there are 5 movies
//   Add one more Movie of your choice. But it CANNOT be from 2008.
// */
// function insertNewMovie() {
//     return Movie.create({title: 'Django', year: 2013});
// }
//
// /*
//   Return the title of the movie with ID=2
// */
// function getMovieWithId2() {
//     return Movie.findByPk(2).then(movie => {
//         return movie.title;
//     });
// }
//
// /*
//   Return an array of all the actor names

function getAllIngredients() {
    return Ingredient.findAll().then(ingredients => {
        return ingredients.map(ingredient => {
            return ingredient.name;
        });
    });
//
// }
//
// /*
//   Return an array of all the movie names from 2008
// */
// function getAllMoviesFrom2008() {
//     return Movie.findAll({
//         where: {
//             year: 2008
//         }
//     }).then(movies => {
//         return movies.map(movie => {
//             return movie.title;
//         });
//     });
// }
//
// /*
//   Delete the genre you added in the first test
// */
// function deleteGenreYouAdded() {
//     return Genre.destroy({where:{
//             name: 'Pyschological'
//         }});
// }
//
// /*
//   Rosario Dawson acted in the movie Eagle Eye.
//   Add this association.
// */
// function associateRosarioToEagleEye() {
//     let moviePromise = Movie.findOne({where: {title: "Eagle Eye"}});
//     let actorPromise = Actor.findOne({where: {name: "Rosario Dawson"}});
//
//     return Promise
//         .all([moviePromise, actorPromise])
//         .then(([movieResult, actorResult]) => {
//             return actorResult.addMovie(movieResult);
//         });
// }
//
// /*
//   Robert Downey Jr. acted in the movie Tropic Thunder.
//   Add this association.
// */
// function associateRobertToTropicThunder() {
//     return Actor.findOne({where: {name: "Robert Downey Jr."}})
//         .then(robert => {
//             return Movie.findOne({where: {title: "Tropic Thunder"}})
//                 .then(movie => {
//                     return movie.addActor(robert);
//                 })
//         });
}
//
module.exports = {
//     insertNewGenre,
//     insertNewMovie,
//     getMovieWithId2,
    getAllIngredients
//     getAllMoviesFrom2008,
//     deleteGenreYouAdded,
//     associateRosarioToEagleEye,
//     associateRobertToTropicThunder,
};
