const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticket.controller');

router.get('/', ticketsController.getAllTickets);
router.get('/:id', ticketsController.getTicketDetail);

module.exports = router;
