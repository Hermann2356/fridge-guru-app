const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'FridgeGuru Web Application',
    description: 'FridgeGuru: is a web application that allows users to keep track of there ingredients and their' +
        ' expiration dates , while also allowing users to search various recipes that can utilize their ingredients.',
  });
});


module.exports = router;