const express = require('express')
const notificationController = require('../Controllers/notificationController')

const router = express.Router()

router.get('/fetch', notificationController.getNotification)
router.post('/post',notificationController.postNotifications)

module.exports = router