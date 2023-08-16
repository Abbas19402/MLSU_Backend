const express = require('express')
const FacultyController = require('../Controllers/facultyController')

const router = express.Router()

router.post('/createFaculty', FacultyController.createFaculty)
router.post('/createFacultyId', FacultyController.createFacultyId)

module.exports = router