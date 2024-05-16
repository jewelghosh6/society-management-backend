const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
    try {
        const saltRounds = 10;
        let salt = await bcrypt.genSalt(saltRounds)
        let hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log('error in hashing password');
    }
}

module.exports = {
    encryptPassword
}