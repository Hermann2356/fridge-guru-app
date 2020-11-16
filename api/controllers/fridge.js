const express = require('express');
const router = express.Router();
const db = require('../models');
const {Fridge} = db;


router.get('/', (req, res) => {
    let user = req.userId;
    Fridge.findAll({where: {userId: user}})
        .then(fridge => res.json(fridge));
});

router.get('/ingredients', (req, res) => {
    let user = req.userId;
    Fridge.findAll({where: {userId: user}})
        .then(fridgeIngredients => {
            let ingredients = Promise
                .all(fridgeIngredients.map(ingredient => {
                    return Ingredient.findByPk(ingredient.ingredientId)
                }));

            res.json(ingredients);
        });
});


router.post('/',

    (req, res) => {
        let {ingredientId} = req.body.ingredientId;
        let {userId} = req.body.userId;
        let {quantity} = req.body.quantity;
        let {expiration} = req.body.expiration;

        Fridge.create({ingredientId, userId, quantity, expiration})
            .then(fridgeIngredient => {
                res.status(201).json(fridgeIngredient);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);


router.get('/:id', (req, res) => {
    const user = req.body.userId;
    const {id} = req.params;
    Fridge.findOne({where: {userId: user, ingredientId: id}})
        .then(fridgeIngredient => {
            if (!fridgeIngredient) {
                return res.sendStatus(404);
            }

            res.json(fridgeIngredient);
        });

});


router.put('/:id', (req, res) => {
        const user = req.body.userId;
        const {id} = req.params;
        Fridge.findOne({where: {userId: user, ingredientId: id}})
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


router.delete('/:id', (req, res) => {
        const user = req.body.userId;
        const { id } = req.params;
        Fridge.findOne({where: {userId: user, ingredientId: id}})
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