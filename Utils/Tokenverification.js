const jwt = require('jsonwebtoken');
const config = require('../config');

const VerifyToken = async( token ) => {
    console.log("fndwidn");
    const decodedToken = jwt.decode(token,config.jwtSecret);
    const now = Date.now() / 1000;

    if(now > decodedToken.exp || now < decodedToken.iat) {
        console.log("Token Expired");
        return false
    }

    const isVerified = jwt.verify(token , config.jwtSecret);
    
    if(isVerified) {
        console.log("Token Valid");
        return true
    } else {
        console.log("Token Expired");
        return false
    }
}
module.exports = VerifyToken;