const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Recipe } = db;

router.get('/', (req, res) => {
    let user = req.userId;
    Recipe.findAll({where: {userId: user}})
        .then(recipes => res.json(recipes));
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    Recipe.findByPk(id)
        .then(recipe => {
            if (!recipe) {
                return res.sendStatus(404);
            }

            res.json(recipe);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Recipe.findByPk(id)
        .then(recipe => {
            if (!recipe) {
                return res.sendStatus(404);
            }

            recipe.destroy();
            res.sendStatus(204);
        });
});

module.exports = router;