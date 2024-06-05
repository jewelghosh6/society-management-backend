const Imap = require('imap');
const { simpleParser } = require('mailparser');
// const nodemailer = require('nodemailer');
require("dotenv").config();


// IMAP configuration for Gmail
const imapConfig = {
    user: process.env.EMAIL,
    password: process.env.PASSWORD, // Use an app password if 2FA is enabled
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false } // This allows self-signed certificates

};

const imap = new Imap(imapConfig);

const openInbox = (cb) => {
    imap.openBox('INBOX', true, cb);
};

imap.once('ready', () => {
    openInbox((err, box) => {
        if (err) throw err;
        imap.search(['UNSEEN', ['SINCE', new Date()]], (err, results) => {
            if (err) throw err;

            if (results.length === 0) {
                console.log('No new emails.');
                imap.end();
                return;
            }

            const f = imap.fetch(results, { bodies: '' });

            f.on('message', (msg, seqno) => {
                const prefix = `(Message #${seqno}) `;
                msg.on('body', (stream, info) => {
                    simpleParser(stream, async (err, parsed) => {
                        if (err) throw err;
                        console.log(prefix + 'Parsed email: ', parsed.subject);
                        console.log('From: ', parsed.from.text);
                        console.log('To: ', parsed.to.text);
                        console.log('Date: ', parsed.date);
                        console.log('Body: ', parsed.text);
                    });
                });
            });

            f.once('error', (err) => {
                console.log('Fetch error: ' + err);
            });

            f.once('end', () => {
                console.log('Done fetching all messages!');
                imap.end();
            });
        });
    });
});

imap.once('error', (err) => {
    console.log(err);
});

imap.once('end', () => {
    console.log('Connection ended');
});

imap.connect();

// Nodemailer configuration for Gmail
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-app-password', // Use an app password if 2FA is enabled
//     },
// });

// const sendMail = (to, subject, text) => {
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: to,
//         subject: subject,
//         text: text,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Email sent: ' + info.response);
//     });
// };

// // Example usage: send an email
// sendMail('recipient-email@example.com', 'Test Subject', 'Test email body.');
