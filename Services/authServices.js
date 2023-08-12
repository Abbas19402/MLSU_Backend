const jwt = require('jsonwebtoken')
const config = require('../config')
const Student = require('../Models/student')
const bcrypt = require('bcrypt')

// Generate a JWT token for a user
function generateToken(user) {
    const payload = {
      sub: JSON.stringify(user._id),
      username: user.username
    };
    const options = {
      expiresIn: '1h'
    };
    return jwt.sign(payload, config.jwtSecret, options);
}

const login = (body) => {
    const student = Student.findOne({ name: body.name })
    const isMatch = bcrypt.compare(body.password , student.password)
    if(!isMatch) {
        throw new Error('Incorrect password!!');
    }
    const token = generateToken(student.generalDetails.enrollment_id)
    return {
        student,
        token
    }
}

const signup = (body) => {
    
}

module.exports = { login , signup }