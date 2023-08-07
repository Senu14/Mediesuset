const express = require('express');
const router = express.Router();

const newsletterController = require('../controllers/newsLetter.controller');

router.get('/newsletter', newsletterController.getEmailList);
router.post('/newsletter', newsletterController.createEmail);
router.delete('/newsletter/:id', newsletterController.deleteEmail);

module.exports = router;
