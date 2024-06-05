const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const welcomeHtml = require('./email-templates/welcome-email');
const Societyinfo = require('./Societyinfo');
const emailTemplate = require('./email-templates/mailTempForOTP');
const generateMailTemplte = require('./email-templates/mailTempForOTP');
const ForgotPasswordMailTemplate = require('./email-templates/ForgotPasswordMailTemplate');
const { insertSocietyInfo } = require('../services/mailServices/commonMailServices');
require("dotenv").config();

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

// async function sendEmail(to, subject, html, attachments) {
//     // const clientId = process.env.client_id; // Replace with your OAuth client ID
//     // const clientSecret = process.env.client_secret; // Replace with your OAuth client secret
//     // const refreshToken = process.env.gmail_refresh_token; // Obtain a refresh token



//     // const oAuth2Client = new google.auth.OAuth2(
//     //     clientId,
//     //     clientSecret,
//     //     `http://${process.env.APP_HOST}:${process.env.APP_PORT}/callback` // Replace with your redirect URI
//     // );

//     // oAuth2Client.setCredentials({ refresh_token: refreshToken });

//     try {
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: user,
//                 pass: pass
//             }
//         });


//         const mailOptions = {
//             from: user, // Replace with your Gmail address
//             to,
//             subject,
//             // text,
//             html: insertSocietyInfo(html),// generateMailTemplte(Societyinfo[0], "1234"),//insertSocietyInfo(html),  // Use the html parameter for HTML content
//             // attachments: attachments
//         };

//         const info = await transport.sendMail(mailOptions);
//         console.log("Info:", info);
//         console.log('Email sent:', info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }



// // Example usage



//Mail Transporter for Mailtrap
// var NodeMailerTransporter = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: process.env.MAIL_TRAP_USERNAME,
//         pass: process.env.MAIL_TRAP_PASSWORD
//     }
// });


//Mail Transporter for Mailtrap
const NodeMailerTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

// async function sendMail(senderMailId, mailSubject, mailTemplate) {
//     // send mail with defined transport object
//     const info = await transport.sendMail({
//         from: '"MySociety" <mysocietymanagement1@gmail.com>', // sender address
//         to: senderMailId, // list of receivers
//         subject: mailSubject, // Subject line
//         text: "Hello world?", // plain text body
//         html: insertSocietyInfo(mailTemplate), // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     return info;

//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// sendMail('jewelghosh611@gmail.com', 'Welocome To MySociety',
//     welcomeHtml,
//     // [
//     //     {
//     //         // File on disk as an attachment
//     //         filename: 'test.txt',
//     //         path: 'utils/test.txt' // Change this to the path of your file
//     //     }
//     // ]
// ).then(res => console.log(res)).catch(err => console.error(err))


module.exports = {
    NodeMailerTransporter
}