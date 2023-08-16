const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    faculty_id: {type: String,  unique: true},
    password: { type: String, required: true },
    personalDetails: {
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        gender: { type: String, require: true },
        date_of_birth: { type: String, required: true }
    },
    qualificationDetails: {
        data: {type: [
            {
                qualificationType: { type: String, required: true },
                degreeName: { type: String, required: true },
            }
        ], required: true}
    },
    contactDetails: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        email: { type: String, required: true },
        secondaryEmail: { type: String },
        phone: { type: String, required: true },
        secondaryPhone: { type: String }
    }
})

module.exports = mongoose.model('faculty' , facultySchema)