const faculty = require('../Models/faculty');
const Faculty = require('../Models/faculty')
const bcrypt = require('bcrypt')

const createFaculty = async(facultyData) => {
    console.log(facultyData);
    const rounds = 10;
    const isFacultyAlreadyCreated = await Faculty.findOne({ faculty_id: facultyData.faculty_id })
    if(isFacultyAlreadyCreated) {
        throw new Error('This faculty is already created Faculty')
    }
    const hashedPassword = await bcrypt.hash(facultyData.password, rounds)
    const newFaculty = new Faculty({
        faculty_id: facultyData.faculty_id,
        password: hashedPassword,
        personalDetails: facultyData.personalDetails,
        qualificationDetails: facultyData.qualificationDetails,
        contactDetails: facultyData.contactDetails
    })
    newFaculty.save()
    return newFaculty
}

const createFacultyId = async({ firstName, lastName, date_of_birth }) => {
    const facultyid = `${firstName}${lastName.charAt(0).toUpperCase()}${date_of_birth.substring(0,4)}`
    console.log(facultyid);
    return {
        faculty_id: facultyid,
        firstName,
        lastName,
        date_of_birth
    }
}

module.exports = { createFaculty, createFacultyId }