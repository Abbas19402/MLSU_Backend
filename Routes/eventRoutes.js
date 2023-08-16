const express = require('express')
const eventController = require('../Controllers/eventController')
const router = express.Router();

router.get('/fetch', eventController.getEvents)
router.post('/post', eventController.postEvents)

module.exports = router