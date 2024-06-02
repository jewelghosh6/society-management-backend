const ForgotPasswordMailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
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
        .button-container {
            text-align: center;
            margin: 20px 0;
        }
        .button {
            display: inline-block;
            padding: 15px 25px;
            font-size: 16px;
            color: #ffffff;
            background-color: #f05a76;
            border: none;
            border-radius: 5px;
            text-decoration: none;
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
            <h2>Password Reset Request</h2>
            <p>Hello [User Name],</p>
            <p>We received a request to reset your password for your account. To reset your password, click the button below:</p>
            <div class="button-container">
                <a href="[RESET_LINK]" class="button">Reset Password</a>
            </div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            <p>Thank you,<br>The [Society Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} [Society Name]. All rights reserved.</p>
            <p>[Society Contact Info]</p>
        </div>
    </div>
</body>
</html>
`
module.exports = ForgotPasswordMailTemplate;;