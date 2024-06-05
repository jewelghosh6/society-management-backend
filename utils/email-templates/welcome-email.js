// const welcomeHtml =
//  `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome to the Society</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 20px;
//         }
//         .container {
//             max-width: 600px;
//             margin: 0 auto;
//             background-color: #ffffff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .header {
//             text-align: center;
//             padding: 20px 0;
//         }
//         .header h1 {
//             margin: 0;
//         }
//         .content {
//             text-align: left;
//         }
//         .footer {
//             text-align: center;
//             padding: 20px 0;
//             font-size: 12px;
//             color: #777777;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Welcome to [Society Name]!</h1>
//         </div>
//         <div class="content">
//             <p>Dear [Member Name],</p>
//             <p>We are delighted to welcome you to [Society Name]. We are thrilled to have you as part of our community.</p>
//             <p>As a member, you now have access to a range of benefits, including:</p>
//             <ul>
//                 <li>Access to our exclusive events and workshops</li>
//                 <li>Networking opportunities with other members</li>
//                 <li>Regular updates and newsletters</li>
//                 <li>Discounts on society merchandise</li>
//             </ul>
//             <p>We encourage you to take full advantage of these benefits and get involved in our community. If you have any questions or need assistance, please do not hesitate to contact us.</p>
//             <p>Best regards,</p>
//             <p>The [Society Name] Team</p>
//         </div>
//         <div class="footer">
//             <p>[Society Name] | [Society Address] | [Society Contact Info]</p>
//         </div>
//     </div>
// </body>
// </html>
// `;
// const welcomeHtml = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome to the Society</title>
//     <style>
//         body {
//             font-family: 'Arial', sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 20px;
//         }
//         .container {
//             max-width: 600px;
//             margin: 0 auto;
//             background-color: #ffffff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             overflow: hidden;
//         }
//         .header {
//             background-color: #4CAF50;
//             color: white;
//             padding: 20px 0;
//             text-align: center;
//         }
//         .header h1 {
//             margin: 0;
//             font-size: 24px;
//         }
//         .content {
//             padding: 20px;
//             text-align: left;
//             color: #333;
//         }
//         .content p {
//             line-height: 1.6;
//             margin: 10px 0;
//         }
//         .content ul {
//             list-style: none;
//             padding: 0;
//         }
//         .content ul li {
//             background: #f4f4f4;
//             margin: 5px 0;
//             padding: 10px;
//             border-radius: 4px;
//         }
//         .content ul li::before {
//             content: '✔';
//             margin-right: 10px;
//             color: #4CAF50;
//         }
//         .footer {
//             background-color: #333;
//             color: white;
//             text-align: center;
//             padding: 10px 0;
//             font-size: 12px;
//         }
//         .footer p {
//             margin: 5px 0;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Welcome to [Society Name]!</h1>
//         </div>
//         <div class="content">
//             <p>Dear [Member Name],</p>
//             <p>We are delighted to welcome you to [Society Name]. We are thrilled to have you as part of our community.</p>
//             <p>As a member, you now have access to a range of benefits, including:</p>
//             <ul>
//                 <li>Access to our exclusive events and workshops</li>
//                 <li>Networking opportunities with other members</li>
//                 <li>Regular updates and newsletters</li>
//                 <li>Discounts on society merchandise</li>
//             </ul>
//             <p>We encourage you to take full advantage of these benefits and get involved in our community. If you have any questions or need assistance, please do not hesitate to contact us.</p>
//             <p>Best regards,</p>
//             <p>The [Society Name] Team</p>
//         </div>
//         <div class="footer">
//             <p>[Society Name] | [Society Address] | [Society Contact Info]</p>
//         </div>
//     </div>
// </body>
// </html>
// `;

const welcomeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Society</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            border: 1px solid #dcdcdc;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
        }
        .header {
            background-color: #f05a76;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0 0;
            font-size: 14px;
        }
        .content {
            padding: 20px;
            color: #333;
        }
        .content h2 {
            font-size: 20px;
            color: #f05a76;
        }
        .content p {
            line-height: 1.6;
            margin: 10px 0;
        }
        .content ul {
            list-style: none;
            padding: 0;
        }
        .content ul li {
            background: #f4f4f4;
            margin: 5px 0;
            padding: 10px;
            border-radius: 4px;
        }
        .content ul li::before {
            content: '✔';
            margin-right: 10px;
            color: #4CAF50;
        }
        .footer {
            background-color: #f8f8f8;
            color: #888888;
            padding: 10px;
            text-align: center;
            border-top: 1px solid #dcdcdc;
            font-size: 12px;
        }
        .footer p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>[Society Name]</h1>
            <p>[Society Address]</p>
        </div>
        <div class="content">
            <h2>Welcome to [Society Name]!</h2>
            <p>Dear [Member Name],</p>
            <p>We are delighted to welcome you to [Society Name]. We are thrilled to have you as part of our community.</p>
            <p>As a member, you now have access to a range of benefits, including:</p>
            <ul>
                <li>Access to our exclusive events and workshops</li>
                <li>Networking opportunities with other members</li>
                <li>Regular updates and newsletters</li>
                <li>Discounts on society merchandise</li>
            </ul>
            <p>We encourage you to take full advantage of these benefits and get involved in our community. If you have any questions or need assistance, please do not hesitate to contact us.</p>
            <p>Best regards,</p>
            <p>The [Society Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} [Society Name]. All rights reserved.</p>
            <p>[Society Contact Info]</p>
        </div>
    </div>
</body>
</html>
`;


module.exports = welcomeHtml;