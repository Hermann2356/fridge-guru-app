const express = require('express');
const router = express.Router();


// Load each controller
const authController = require('./auth');
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const ingredientsController = require('./ingredient');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/ingredients', ingredientsController);

module.exports = router;