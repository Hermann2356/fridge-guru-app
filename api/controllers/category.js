const express = require('express');
const router = express.Router();
const db = require('../models');
const { Category} = db;

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


router.get('/', (req, res) => {
    Category.findAll({})
        .then(categories => res.json(categories));
});


router.post('/',

    (req, res) => {
        let {name} = req.body.name;
        let {pointValue} = req.body.pointValue;

        Category.create({name, pointValue})
            .then(category => {
                res.status(201).json(category);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);


router.get('/:name', (req, res) => {
    const {categoryName} = req.params;
    Category.findAll({
        where: {name: categoryName}
    })
        .then(category => {
            if (!category) {
                return res.sendStatus(404);
            }

            res.json(category);
        });
});


router.put('/:name', (req, res) => {
        const { categoryName } = req.params;
        Category.findAll({where: { name: categoryName }})
            .then(category => {
                if (!category) {
                    return res.sendStatus(404);
                }

                Category.name = req.body.name;
                Category.pointValue = req.body.pointValue;
                Category.save()
                    .then(category => {
                        res.json(category);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:name',
    (req, res) => {
        const {ingredientName} = req.params;
        Ingredient.findAll({where: {name: ingredientName}})
            .then(ingredient => {
                if (!ingredient) {
                    return res.sendStatus(404);
                }

                ingredient.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;