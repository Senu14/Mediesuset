const express = require('express');
const router = express.Router();

const campController = require('../controllers/camps.controller');

router.get('/camps', campController.getCampList);
router.get('/camps/:id', campController.getCampDetails);

module.exports = router;
