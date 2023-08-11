// Importing Express and initializing a routerconst express = require("express");
const router = express.Router();

// Importing individual route files for different parts of the application
const scenes = require('./scenes.route')
const events = require('./events.route')
const camps = require('./camps.route')
const images = require('./images.route')
const ticket = require('./ticket.route')
const nyheder = require('./nyheder.route')
const program = require('./program.route')
const billet = require('./billet.route')
const newsletter = require('./newsLetter.route')
const login = require('./login.route')


// Associating each route file with a specific URL path
router.use("/api/scenes", scenes) // e.g., all requests starting with "/api/scenes" will be handled by the scenes router
router.use("/api/events", events)
router.use("/api/camps", camps)
router.use("/api/images", images)
router.use("/api/ticket", ticket)
router.use("/api/nyheder", nyheder)
router.use("/api/login", login)
router.use("/api/program", program)
router.use("/api/billet", billet)
router.use("/api/newsletter", newsletter)
router.use("/api/login", login)

// Exporting the router so it can be used in other parts of the application
module.exports = router;
