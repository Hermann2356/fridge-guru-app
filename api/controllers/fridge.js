const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const {Fridge, Ingredient} = db;


router.get('/', (req, res) => {
    Fridge.findAll({where: {userId: 1}})
        .then(fridgeItems => res.json(fridgeItems));
});


router.get('/ingredients', (req, res) => {
    //let user = req.body.userId;
    let fridgeIngredients = Fridge.findAll({where: {userId: 1}}).then(items => items.map(i => {
        return i.ingredientId;
    }));
    let ingredientsPromise = fridgeIngredients.map(i => {
        return Ingredient.findByPk(i);
    })
        .then(ingredients => res.json(ingredients));
});


router.put('/:id', (req, res) => {
        const { id } = req.params;
        Fridge.findByPk(id)
            .then(item => {
                if (!item) {
                    return res.sendStatus(404);
                }

                item.expiration = req.body.expiration;
                item.save()
                    .then(item => {
                        res.json(item);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:id', (req, res) => {
        const { id } = req.params;
        Fridge.findByPk(id)
            .then(item => {
                if(!item) {
                    return res.sendStatus(404);
                }

                item.destroy();
                res.sendStatus(204);
            });
    }
);



module.exports = router;