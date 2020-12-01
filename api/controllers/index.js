const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const ingredientsController = require('./ingredients');
const fridgeController = require('./fridge');
const recipeController = require('./recipe');
const userController = require('./user');
const profileController = require('./profile');
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/ingredients', ingredientsController);
router.use('/fridge', fridgeController);
router.use('/recipe', recipeController);
router.use('/user', userController);
router.use('/profile', profileController);
module.exports = router;