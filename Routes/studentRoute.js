const express = require('express')
const StudentController = require('../Controllers/studentController')

const router = express.Router();

router.get('/getAllStudents', StudentController.getAllStudents)
router.post('/getStudent', StudentController.getStudent)
router.post('/addStudent', StudentController.addStudent)

module.exports = router