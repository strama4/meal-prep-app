const express = require('express');
const router = express.Router();

const recipesController = require('../controllers/recipesController');

router.get('/api/recipes', recipesController.index);

module.exports = router;