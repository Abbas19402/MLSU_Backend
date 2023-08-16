const AuthServices = require('../Services/authServices');

const loginStudent = async(req, res) => {
    console.log(req.body);
    const StudentLoginResponse = await AuthServices.loginStudent(req.body.enrollment_id, req.body.password);
    try {
        if(StudentLoginResponse.token) {
            res.status(200).json({
                success: true,
                message: 'Student Login Successfull!!',
                student: StudentLoginResponse
            })
        }   
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
}

const loginFaculty = async(req, res) => {
    const FacultyLoginResponse = await AuthServices.loginFaculty(req.body.faculty_id, req.body.password);
    try {
        if(FacultyLoginResponse.token) {
            res.status(200).json({
                success: true,
                message: 'Faculty Login Successfull!!',
                faculty: FacultyLoginResponse
            })
        }   
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { loginFaculty , loginStudent } 
