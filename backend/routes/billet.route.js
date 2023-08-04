const express = require('express');
const router = express.Router();

const userticketsController = require('../controllers/billet.controller');

router.get('/usertickets/:id', userticketsController.getUserTicketsById);
router.get('/usertickets/num_by_camp_id/:id', userticketsController.getTicketsCountByCampId);
router.post('/usertickets', userticketsController.createUserTicket);
router.delete('/usertickets/:id', userticketsController.deleteUserTicket);

module.exports = router;
