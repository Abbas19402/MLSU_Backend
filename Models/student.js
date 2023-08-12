const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    generalDetails: { type: {
        department: {type: String , required: true },
        course_enrolled: {type: String , required: true },
        batch: {type: String , required: true },
        enrollment_id: {type: String , required: true, unique: true },
        enrollment_date: {type: String , required: true }
    } , required: true},
    personalDetails: { type: {
        gender: {type: String , required: true },
        bloodGroup: {type: String , required: true },
        date_of_birth: {type: String , required: true },
        nationality: {type: String , required: true },
        father_name: {type: String , required: true },
        mother_name: {type: String , required: true },
    } , required: true},
    addressDetails: { type: {
        home: {type: String , required: true },
        city: {type: String , required: true },
        state: {type: String , required: true },
        country: {type: String , required: true },
        pin_code: {type: String , required: true },
    } , required: true},
    contactDetails: { type: {
        mobile: {type: String , required: true },
        emergency: {type: String , required: true },
        email: {type: String , required: true },
    } , required: true},
    academicDetails: { type: {
        current_semester: {type: String , required: true },
        course_type: {type: String, required: true}, // either semester or yearly of trimesters (if any)
        total_semesters_in_course: {type: Number , required: true },
        previous_semesters_details: {type: [
            {
                semester: {type: Number, required: true},
                attendance_this_semseter: {type: Number, required: true},
                total_marks: { type: Number , required: true },
                obtained_marks: { type: Number, required: true }
            }
        ]},
        attendance_till_date: { type: String , required: true },
        total_working_days: { type: String , required: true }
    }},
})

module.exports = mongoose.model('students' , studentSchema)