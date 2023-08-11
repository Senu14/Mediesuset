const express = require('express');
const router = express.Router();

const programmeController = require('../controllers/program.controller');

router.get('/programme/:id', programmeController.getProgrammeById);
router.post('/programme', programmeController.createProgramme);
router.delete('/programme/:id', programmeController.deleteProgramme);

module.exports =router;
