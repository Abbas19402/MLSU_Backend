const FacultyServices = require('../Services/facultyService')

const createFaculty = async(req, res) => {
    console.log("Faculty: ",req.body);
    const newFacultyResponse = await FacultyServices.createFaculty(req.body)
    res.status(200).json({
        success: true,
        message: 'Faculty created successfully!!',
        data: newFacultyResponse
    })
}

const createFacultyId = async(req, res) => {
    console.log("Details: ",req.body);
    const facultyIdResponse = await FacultyServices.createFacultyId(req.body)
    res.status(200).json({
        success: true,
        message: 'Faculty ID created successfully!!',
        data: facultyIdResponse
    })
}

module.exports = { createFaculty, createFacultyId }