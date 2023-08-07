const express = require('express');
const router = express.Router();
const nyhederController = require('../controllers/nyheder.controller');

// Route to get news list
router.get('/nyheder', nyhederController.getnyhederList);

// Route to get nyheder details
router.get('/nyheder/:id', nyhederController.getnyhederDetails);

module.exports = router;
