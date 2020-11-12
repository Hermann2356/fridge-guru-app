
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Ingredient } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/ingredients', (req,res) => {
    Ingredient.findAll({})
        .then(ingredients => res.json(ingredients));
});


router.post('/ingredients',

    (req, res) => {
        let { name } = req.body.name;
        let { consistency } = req.body.consistency;
        let { fridgeSL } = req.body.fridgeSL;
        let { cupboardSL } = req.body.fridgeSL;
        let { freezerSL } = req.body.freezerSL;
        let { categoryId } = req.body.categoryId;

        Ingredients.create({ name, consistency, fridgeSL, cupboardSL, freezerSL, categoryId })
            .then(ingredient => {
                res.status(201).json(ingredient);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);


router.get('/:name', (req, res) => {
    const { ingredientName } = req.params;
    Ingredient.findAll({
        where: { name : ingredientName}})
        .then(ingredient => {
            if(!ingredient) {
                return res.sendStatus(404);
            }

            res.json(ingredient);
        });
});


// router.put('/:id',
//     passport.isAuthenticated(),
//     (req, res) => {
//         const { id } = req.params;
//         Post.findByPk(id)
//             .then(post => {
//                 if(!post) {
//                     return res.sendStatus(404);
//                 }
//
//                 post.content = req.body.content;
//                 post.save()
//                     .then(post => {
//                         res.json(post);
//                     })
//                     .catch(err => {
//                         res.status(400).json(err);
//                     });
//             });
//     }
// );


router.delete('/:name',
    (req, res) => {
        const { ingredientName } = req.params;
        Ingredient.findAll({where : { name: ingredientName }})
            .then(ingredient => {
                if(!ingredient) {
                    return res.sendStatus(404);
                }

                ingredient.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;