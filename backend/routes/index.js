const express = require("express");
const router = express.Router();

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



router.use("/api/scenes", scenes)
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


module.exports = router;
