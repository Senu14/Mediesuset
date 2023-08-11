// Importing Express and creating a router for events/camps
const express = require('express');
const router = express.Router();

// Importing the corresponding controller to handle requests
const eventsController = require('../controllers/events.controller'); // or campController

// Defining GET routes for listing all items and getting a single item by ID
router.get('/', eventsController.getAllEvents); // or campController.getCampList
router.get('/:id', eventsController.getEventDetail); // or campController.getCampDetails

// Exporting the router for use in other parts of the application
module.exports = router;

