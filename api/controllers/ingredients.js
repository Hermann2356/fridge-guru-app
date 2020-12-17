const express = require('express');
const router = express.Router();
const db = require('../models');
// const passport = require('../middlewares/authentication');
const {Ingredient} = db;


router.get('/', (req, res) => {
    Ingredient.findAll({})
        .then(ingredients => res.json(ingredients));
});


router.post('/', (req, res) => {

        const {name, image, consistency, shelfLife, categoryId} = req.body;

        Ingredient.max('id')
            .then(lastPK => {

                const id = lastPK + 1;

                Ingredient.create({id, name, image, consistency, shelfLife, categoryId})
                    .then(ingredient => {
                        console.log(ingredient.toJSON());
                        res.status(201).json(ingredient);
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err);
                    });
            })
    }
);


router.get('/:ingredientId', (req, res) => {

    const {ingredientId} = req.params;

    Ingredient.findByPk(ingredientId)
        .then(ingredient => {
            if (!ingredient) {
                return res.sendStatus(404);
            }

            res.json(ingredient);
        });
});


router.put('/:ingredientId', (req, res) => {
        const {ingredientId} = req.params;
        Ingredient.findByPk(ingredientId)
            .then(ingredient => {
                if (!ingredient) {
                    return res.sendStatus(404);
                }

                ingredient.name = req.body.name;
                ingredient.consistency = req.body.consistency;
                ingredient.shelfLife = req.body.shelfLife;
                ingredient.categoryId = req.body.categoryId;

                ingredient.save()
                    .then(ingredient => {
                        console.log(ingredient.toJSON());
                        res.json(ingredient);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:ingredientId', (req, res) => {

        const {ingredientId} = req.params;
        Ingredient.findByPk(ingredientId)
            .then(ingredient => {

                if (!ingredient) {
                    return res.sendStatus(404);
                }

                ingredient.destroy();
                console.log('DELETED:');
                console.log(ingredient.toJSON());
                res.sendStatus(204);
            });
    }
);


module.exports = router;