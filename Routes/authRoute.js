const express = require('express')
const authController = require('../Controllers/authController')

const router = express.Router()

router.post('/login/student', authController.loginStudent)
router.post('/login/faculty', authController.loginFaculty)

module.exports = router;