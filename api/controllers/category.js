const express = require('express');
const router = express.Router();
const db = require('../models');
// const passport = require('../middlewares/authentication');
const { Category } = db;


router.get('/', (req, res) => {
    Category.findAll({})
        .then(categories => res.json(categories));
});


router.post('/', (req, res) => {

    let { name, pointValue } = req.body;

     Category.max('id')
         .then(lastPk => {

             let id = lastPk + 1;

             Category.create({ id, name, pointValue })
                 .then(category => {
                     console.log(category.toJSON());
                     res.status(201).json(category);
                 })
                 .catch(err => {
                     console.log(err)
                     res.status(400).json(err);
                 });
         });


    }
);



router.get('/:categoryId', (req, res) => {

    const { categoryId } = req.params;
    Category.findByPk(categoryId)
        .then(category => {
            if (!category) {
                return res.sendStatus(404);
            }

            res.json(category);
        });
});


router.put('/:categoryId', (req, res) => {
        const { categoryId } = req.params;
        Category.findByPk(categoryId)
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


router.delete('/:categoryId', (req, res) => {
        const { categoryId } = req.params;
        Category.findByPk(categoryId)
            .then(category => {

                if (!category) {
                    return res.sendStatus(404);
                }
                category.destroy();
                console.log('DELETED:');
                console.log(category.toJSON());
                res.sendStatus(204);
            });
    }
);


module.exports = router;