const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
    try {
        hashedPsrd=await bcrypt.hash(password, 10);
    return hashedPsrd;
    } catch (error) {
        console.log('error in hashing password');
    }  
}

module.exports = {
    encryptPassword
}