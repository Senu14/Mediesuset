const express = require('express');
const router = express.Router();
const scenesController = require('../controllers/scenes.controller');

router.get('/', scenesController.getAllScenes);
router.get('/:id', scenesController.getSceneDetail);

module.exports = router;
