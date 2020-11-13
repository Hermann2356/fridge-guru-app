const express = require('express');
const router = express.Router();
const db = require('../models');
const {Ingredient} = db;


router.get('/', (req, res) => {
    Ingredient.findAll({})
        .then(ingredients => res.json(ingredients));
});


router.post('/',

    (req, res) => {
        let { name } = req.body.name;
        let { consistency } = req.body.consistency;
        let { fridgeSL } = req.body.fridgeSL;
        let { cupboardSL } = req.body.cupboardSL;
        let { freezerSL } = req.body.freezerSL;
        let { categoryId } = req.body.categoryId;

        Ingredient.create({ name, consistency, fridgeSL, cupboardSL, freezerSL, categoryId })
            .then(ingredient => {
                res.status(201).json(ingredient);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);

//  (GET) /ingredients - use for fetch('/ingredients/apple')
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ingredient.findByPk(id)
        .then(ingredient => {
            if (!ingredient) {
                return res.sendStatus(404);
            }

            res.json(ingredient);
        });
});


router.put('/:id', (req, res) => {
        const { id } = req.params;
        Ingredient.findByPk(id)
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
        const { id } = req.params;
        Ingredient.findByPk(id)
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