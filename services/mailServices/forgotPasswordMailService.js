const ForgotPasswordMailTemplate = require("../../utils/email-templates/ForgotPasswordMailTemplate");
const { encryptData } = require("../URLEncodeDecodeServices");
const { sendMail } = require("./commonMailServices")
require("dotenv").config();


const sendResetPasswordMail = async (userObj, resetToken) => {

    let dataToEncryptForURL = `${resetToken}#${userObj.email_id}`;

    let ecryptedData = encryptData(dataToEncryptForURL);
    
    let resetUrl = `${process.env.FRONTEND_URL}/auth/reset-password?token=${ecryptedData}`;
    console.log("resetUrl", resetUrl);
    let forgotPassMailTemplate = ForgotPasswordMailTemplate
        .replaceAll('[RESET LINK]', resetUrl)
        .replace('[User Name]', userObj.first_name);
    // console.log(forgotPassMailTemplate);
    try {
        let sentInfo = await sendMail(userObj.email_id, "Reset Your Password", forgotPassMailTemplate);
        return sentInfo;
    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    sendResetPasswordMail
}

