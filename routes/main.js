const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/main');


router.get('/', mainCtrl.getMainPage);


router.post('/search', mainCtrl.searchRecipes);








module.exports = router;