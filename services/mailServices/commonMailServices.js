const Societyinfo = require("../../utils/Societyinfo");
const { NodeMailerTransporter } = require("../../utils/node-mailer-config");

const insertSocietyInfo = (html) => {
    return html.replaceAll('[Society Name]', Societyinfo[0].societyName).
        replaceAll('[Society Address]', Societyinfo[0].soceityAddress).
        replaceAll('[Society Contact Info]', Societyinfo[0].societyContact)
    // replaceAll('[Member Name]', Societyinfo[0].memberName)
}

const sendMail = async (senderMailId, mailSubject, mailTemplate) => {
    // send mail with defined transport object
    try {
        const info = await NodeMailerTransporter.sendMail({
            from: '"MySociety" <mysocietymanagement1@gmail.com>', // sender address
            to: senderMailId, // list of receivers
            subject: mailSubject, // Subject line
            text: "Hello world?", // plain text body
            html: insertSocietyInfo(mailTemplate), // html body
        });

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error(error);
    }


    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = {
    sendMail,
    insertSocietyInfo
}