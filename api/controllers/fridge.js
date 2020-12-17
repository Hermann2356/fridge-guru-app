const express = require('express');
const router = express.Router();
const db = require('../models');
// const passport = require('../middlewares/authentication');
const { Fridge, Ingredient } = db;


router.get('/:userId', (req, res) => {
    let { userId } = req.params;
    Fridge.findAll({where: {userId: userId}})
        .then(fridge => res.status(200).json(fridge))
        .catch(err => {
           res.status(404);
    })
});

router.get('/ingredients/:userId', (req, res) => {
    let { userId } = req.params;
    Fridge.findAll({where: {userId: userId}})
        .then(fridgeIngredients => {
            let ingredients = Promise
                .all(fridgeIngredients.map(ingredient => {
                    return Ingredient.findByPk(ingredient.ingredientId)
                }));

            res.json(ingredients);
        });
});


router.post('/', (req, res) => {

        let{ ingredientId, userId, quantity, expiration } = req.body;

        Fridge.create({ingredientId, userId, quantity, expiration})
            .then(fridgeIngredient => {
                res.status(201).json(fridgeIngredient);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);


router.get('/:userId/:ingredientId', (req, res) => {
    const {  userId, ingredientId } = req.params;
    Fridge.findOne({where: { userId: userId, ingredientId: ingredientId }})
        .then(fridgeIngredient => {
            if (!fridgeIngredient) {
                return res.sendStatus(404);
            }

            res.json(fridgeIngredient);
        });

});


router.put('/:userId/:ingredientId', (req, res) => {
    const { userId, ingredientId } = req.params;
        Fridge.findOne({where: {userId: userId, ingredientId: ingredientId}})
            .then(fridgeIngredient => {
                if (!fridgeIngredient) {
                    return res.sendStatus(404);
                }
                fridgeIngredient.quantity = req.body.quantity;
                fridgeIngredient.expiration = req.body.expiration;

                fridgeIngredient.save()
                    .then(ingredient => {
                        res.json(ingredient);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:userId/:ingredientId', (req, res) => {

        const { userId, ingredientId } = req.params;
        Fridge.findOne({where: {userId: userId, ingredientId: ingredientId}})
            .then(fridgeIngredient => {
                if (!fridgeIngredient) {
                    return res.sendStatus(404);
                }

                fridgeIngredient.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;