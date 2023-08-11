const express = require('express');
const router = express.router();

const imagesController = require('../controllers/images.controller');

router.get('/images', imagesController.getImageList);

module.exports = router;
