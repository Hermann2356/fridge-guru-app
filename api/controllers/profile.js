const express = require('express');
const router = express.Router();
const db = require('../models');
const { User, Profile } = db;


router.get('/:userId', (req, res) => {
    let { userId } = req.params;
    Profile.findOne({where:{ userId: userId }})
        .then(profile => {
            return res.json(profile);
        });
});


module.exports = router;