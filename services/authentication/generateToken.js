require("dotenv").config();
const jwt = require("jsonwebtoken");
const crypto = require('crypto')
const bcrypt = require('bcrypt');
const Users = require("../../db/models/users");

const createAccessToken = (payload) => {
    try {
        let accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET,
            {
                expiresIn: "10m",
            });
        return accessToken;
    } catch (error) {
        console.log(error);
    }
};

const createRefreshToken = (payload) => {
    try {
        let refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET,
            {
                expiresIn: "6h",
            });
        return refreshToken;
    } catch (error) {
        console.log(error);
    }

}

const generatePasswordResetToken = async (email) => {
    let token = crypto.randomBytes(32).toString('hex');
    console.log("Password reset token: ", token);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedToken = bcrypt.hashSync(token, salt);
    try {
        let resp = await Users.update({
            password_reset_token: hashedToken,
            password_reset_token_expire_at: Date.now()+ 10*60*1000 //10 mins validity of token
        }, {
            where: {
                email_id: email
            }
        })
        return {
            resetToken: token,
            updateResponse: resp
        }
    } catch (error) {
        console.error(error);
        return null;
    }

}
// generatePasswordResetToken("th")

module.exports = {
    createAccessToken,
    createRefreshToken,
    generatePasswordResetToken
}
