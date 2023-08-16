const jwt = require('jsonwebtoken')
const config = require('../config')
const Student = require('../Models/student')
const Faculty = require('../Models/faculty')
const bcrypt = require('bcrypt')

// Generate a JWT token for a user
function generateTokenStudent(student) {
    const payload = {
      sub: JSON.stringify(student._id),
      enrollment_id: student.enrollment_id
    };
    const options = {
      expiresIn: '182d'
    };
    return jwt.sign(payload, config.jwtSecret, options);
}

function generateTokenFaculty(faculty) {
  const payload = {
    sub: JSON.stringify(faculty._id),
    enrollment_id: faculty.faculty_id
  };
  const options = {
    expiresIn: '182d'
  };
  return jwt.sign(payload, config.jwtSecret, options);
}

const loginStudent = async(eid, password) => {
  const student = await Student.findOne({ enrollment_id: eid })
  const isMatch = await bcrypt.compare(password , student.password)
  console.log(eid, password, student);
  if(!isMatch) {
      throw new Error('Incorrect password!!');
  }
  const token = generateTokenStudent(student)
  return {
      student,
      token
  }
}

const loginFaculty = async(fid, password) => {
  
  const faculty = await Faculty.findOne({ faculty_id: fid })
  console.log("Faculty Data: ",faculty);
  const isMatch = await bcrypt.compare(password , faculty.password)
  if(!isMatch) {
      throw new Error('Incorrect password!!');
  }
  const token = generateTokenFaculty(faculty)
  return {
      faculty,
      token
  }
}

module.exports = { loginStudent , loginFaculty }