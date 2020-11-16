const express = require('express');
const router = express.Router();
const db = require('../models');
const { Category } = db;


router.get('/', (req, res) => {
    Category.findAll({})
        .then(categories => res.json(categories));
});


router.post('/',

    (req, res) => {
        let { name } = req.body.name;
        let { pointValue } = req.body.pointValue;


        Category.create({ name, pointValue })
            .then(category => {
                res.status(201).json(category);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);



router.get('/:id', (req, res) => {
    const { id } = req.params;
    Category.findByPk(id)
        .then(category => {
            if (!category) {
                return res.sendStatus(404);
            }

            res.json(category);
        });
});


router.put('/:id', (req, res) => {
        const { id } = req.params;
        Category.findByPk(id)
            .then(category => {
                if (!category) {
                    return res.sendStatus(404);
                }

                category.name = req.body.name;
                category.pointValue = req.body.pointValue;

                category.save()
                    .then(category => {
                        res.json(category);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);


router.delete('/:id', (req, res) => {
        const { id } = req.params;
        Category.findByPk(id)
            .then(category => {
                if (!category) {
                    return res.sendStatus(404);
                }

                category.destroy();
                res.sendStatus(204);
            });
    }
);


module.exports = router;