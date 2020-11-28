const express = require('express');
const router = express.Router();
const passport = require('../middlewares/authentication');
const { User } = db;



router.get('/email/:email', passport.isAuthenticated(), (req, res) => {
    const { email } = req.params;
    User.findAll({where:{ email: email }})
        .then(user => {
            return res.json(user);
        });
});