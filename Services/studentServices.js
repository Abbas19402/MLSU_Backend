const Student = require('../Models/student')
const bcrypt = require('bcrypt')

const showAllStudents = async () => {
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
    const rounds = 10;
    const isStudentAlreadyEnrolled = await Student.findOne({ generalDetails: {
        enrollment_id: body.generalDetails.enrollment_id
    }})
    console.log(isStudentAlreadyEnrolled);
    if(isStudentAlreadyEnrolled) {
        throw new Error('Student already enrolled in a course!!');
    }
    const hashedPassword = await bcrypt.hash(body.password,rounds)

    const newStudent = new Student({
        name: body.name,
        password: hashedPassword,
        enrollment_id: body.enrollment_id,
        generalDetails: body.generalDetails,
        personalDetails: body.personalDetails,
        addressDetails: body.addressDetails,
        contactDetails: body.contactDetails,
        academicDetails: body.academicDetails
    });
    newStudent.save();
    return newStudent;
}

module.exports = { showAllStudents, getStudent, addStudent }