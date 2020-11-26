const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.get('/email/:email', (req, res) => {
  const { email } = req.params;
  User.findAll({where:{ email: email }})
      .then(user => {
        return res.json(user);
      });
});

router.get('/username/:username', (req, res) => {
  const { username } = req.params;
  User.findAll({where:{ username: username }})
      .then(user => {
        return res.json(user);
      });
});

router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;