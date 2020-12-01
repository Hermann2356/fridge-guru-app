const express = require('express');
const router = express.Router();
const passport = require('../middlewares/authentication');
const db = require('../models');
const { User } = db;



router.get('/:id', (req, res) => {
    const { id } = req.params;
    User.findOne({where:{ id: id }})
        .then(user => {
            return res.json(user);
        });
});

module.exports = router;