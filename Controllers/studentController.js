const StudentServices = require('../Services/studentServices')

const getAllStudents = async(req, res) => {
    const studentResponse = await StudentServices.showAllStudents();
    res.status(200).json({
        success: true,
        message: `Listed all students.`,
        data: studentResponse
    })
}

const getStudent = async(req, res) => {
    const { enrollmentId } = req.body;
    const studentResponse = await StudentServices.getStudent(enrollmentId)
    res.status(200).json({
        success: true,
        message:"fetched Student Details successfully",
        data: studentResponse
    })
}

const addStudent = async(req, res) => {
    const newStudentResponse = await StudentServices.addStudent(req.body);
    res.status(200).json({
        success: true,
        message: 'Student added successfully',
        data: newStudentResponse
    })
}

module.exports = { getAllStudents, getStudent, addStudent }