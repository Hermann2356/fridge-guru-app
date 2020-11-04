const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');


// HTTP post method for sign up page
router.post('/signup', (req, res) =>{
    console.log("POST body: ", req.body);
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }).then((user) =>{
        req.login(user, () => res.status(201).json(user));
    }).catch((err) =>{
        res.status(401).json({msg: 'Failed Signup', err});
    });
});

// HTTP post method for login page
router.post('/login', passport.authenticate('local'), (req, res) =>{
    // If this function gets called, authentication was sucessful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
});

// HTTP post method to logout page
router.post('/logout', (req, res) =>{
    req.logout();
    res.status(200).json({message: 'Logout successful'});
});


module.exports = router;