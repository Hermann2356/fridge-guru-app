const express = require('express');
const router = express.Router();
const db = require('../models');
const {Ingredient} = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /ingredients
//    POST   /ingredients
//    GET    /ingredients/:name
//    PUT    /ingredients/:name
//    DELETE /ingredients/:name

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

//  (GET) /ingredients - use for fetch('/ingredients')
router.get('/', (req, res) => {
    Ingredient.findAll({})
        .then(ingredients => res.json(ingredients));
});

//  (GET) /ingredients - use for
//  fetch('/ingredients'{ method: 'POST" method: 'POST', credentials: 'include',headers: {'Content-Type': 'application/json'})
router.post('/',

    (req, res) => {
        let {name} = req.body.name;
        let {consistency} = req.body.consistency;
        let {fridgeSL} = req.body.fridgeSL;
        let {cupboardSL} = req.body.cupboardSL;
        let {freezerSL} = req.body.freezerSL;
        let {categoryId} = req.body.categoryId;

        Ingredient.create({name, consistency, fridgeSL, cupboardSL, freezerSL, categoryId})
            .then(ingredient => {
                res.status(201).json(ingredient);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);

//  (GET) /ingredients - use for fetch('/ingredients/apple')
router.get('/:name', (req, res) => {
    const {name} = req.params;
    Ingredient.findAll({
        where: {name: name}
    })
        .then(ingredient => {
            if (!ingredient) {
                return res.sendStatus(404);
            }

            res.json(ingredient);
        });
});


router.put('/:name', (req, res) => {
        const { name } = req.params;
        Ingredient.findAll({where: { name: name }})
            .then(Ingredient => {
                if (!Ingredient) {
                    return res.sendStatus(404);
                }

                Ingredient.name = req.body.name;
                Ingredient.consistency = req.body.consistency;
                Ingredient.fridgeSL = req.body.fridgeSL;
                Ingredient.cupboardSL = req.body.cupboardSL;
                Ingredient.freezerSL = req.body.freezerSL;
                Ingredient.categoryId = req.body.categoryId;
                Ingredient.save()
                    .then(ingredients => {
                        res.json(ingredients);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:name',
    (req, res) => {
        const {name} = req.params;
        Ingredient.findAll({where: {name: name}})
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