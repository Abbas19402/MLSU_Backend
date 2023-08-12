const Student = require('../Models/student')

const showAllStudents = async (semester, course) => {
    const allStudents = Student.find()
    return allStudents
}
const getStudent = async (enrollmentId) => {
    const student = Student.findOne({ generalDetails:{
        enrollment_id: enrollmentId
    } })
    return student
}
const addStudent = async (body) => {
    const isStudentAlreadyEnrolled = await Student.findOne({ generalDetails: {
        enrollment_id: body.generalDetails.enrollment_id
    }})
    if(isStudentAlreadyEnrolled) {
        throw new Error('Student already enrolled in a course!!');
    }
    const newStudent = new Student(body);
    newStudent.save();
    return newStudent;
}

module.exports = { showAllStudents, getStudent, addStudent }