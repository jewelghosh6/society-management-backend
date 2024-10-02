const { decryptData } = require("../services/URLEncodeDecodeServices");
const { authenticateUser } = require("../services/authentication/authUser");
const { generatePasswordResetToken } = require("../services/authentication/generateToken");
const { encryptPassword } = require("../services/authentication/password");
const { verifyRefreshTokenAndGetAccessToken,
  verifyRefreshTokenAndDeleteFromRedis,
  verifyPasswordResetToken } = require('../services/authentication/verifyToken');
const { sendResetPasswordMail } = require("../services/mailServices/forgotPasswordMailService");
const { getUserByEmailId, updateUserById } = require("../services/userService");

const login = async (req, res) => {
  const emailId = req.body.email;
  const password = req.body.password;
  try {
    if (emailId == null || password == null) res.status(400).send("Give valid emailId & password");

    let authRes = await authenticateUser(emailId, password);
    //console.log(authRes);

    if (authRes[0] === 200) {
      const cookieOptions = {
        httpOnly: true,
        secure: false, // Set to true for HTTPS in production
        maxAge: 1000 * 60 * 60 * 24, // Expires in 24 hours
      };

      res.cookie("access-token", authRes[1], cookieOptions);
      res.cookie("refresh-token", authRes[2], cookieOptions);
      res.json({
        success: true,
        message: "Welcome back,Login Successful !!!",
        accessToken: authRes[1],
        refreshToken: authRes[2],
        userData: authRes[3],
        accessTokenExpireAt: new Date(Date.now() + 3 * 60 * 1000)
      });
    }
    else res.status(authRes[0]).send({ success: false, message: authRes[1], error_code: authRes[2] });
  }
  catch (error) {
    res.status(401).send({ success: false, message: 'wrong emailId or password', error: error });
    console.log(error);
  }
};

const generateAccessToken = async (req, res) => {
  let refreshToken = req.body.refreshToken;
  if (!refreshToken) res.status(401).send('Refersh token must be provided');
  else {
    const resArr = await verifyRefreshTokenAndGetAccessToken(refreshToken);

    // console.log('in authController' + resArr);
    if (resArr[0] == 200) res.send({ accessToken: resArr[1] });
    else res.status(resArr[0]).send(resArr[1]);
  }
}

const signOut = async (req, res) => {
  let refreshToken = req.body.refreshToken;
  // console.log("In auth controller refreshToken: " + refreshToken);

  if (!refreshToken) res.status(401).send('Give valid refersh token');

  let resArr = await verifyRefreshTokenAndDeleteFromRedis(refreshToken);

  res.status(resArr[0]).send(resArr[1]);

}

const generateForgotPasswordLink = async (req, res) => {
  let email = req.body.email;
  try {
    let foundUser = await getUserByEmailId(email);
    if (!foundUser) {
      res.status(400).send({
        success: false,
        message: "No user found"
      });
      return;
    }

    let tokenObj = await generatePasswordResetToken(email);
    let userObj = await getUserByEmailId(email);
    let sentinfo = await sendResetPasswordMail(userObj, tokenObj.resetToken);
    res.status(200).send({
      success: true,
      message: sentinfo
    });
  } catch (error) {
    console.error(error);
  }

}

const verifyResetToken = async (req, res) => {
  let resetToken = req.body.token;
  // let email = req.body.email;
  try {
    let resp = await verifyPasswordResetToken(resetToken);
    res.status(resp[0]).send({
      success: resp[0] == 200 ? true : false,
      message: resp[1]
    })
  } catch (error) {
    console.error(error);
    res.status(400).send({
      success: false,
      error: error
    })
  }
}

const setNewPassword = async (req, res) => {
  // console.log("req.body", req.body);
  let { token, password, confirm_password } = req.body;

  try {
    let respFromVerifyTokenMethod = await verifyPasswordResetToken(token);

    if (respFromVerifyTokenMethod[0] == 400) {
      res.status(400).send({
        success: false,
        a: 1,
        message: respFromVerifyTokenMethod[1]
      })
      return;
    }
    // else if

    if (password !== confirm_password) {
      res.status(400).send({
        success: false,
        a: 2,
        message: "Password & Confirm Password must be same"
      })
      return;
    }

    let userObj = respFromVerifyTokenMethod[2];

    let respFromUpdateUserMethod = await updateUserById(userObj.id,
      {
        password: await encryptPassword(password),
        password_reset_token: null,
        password_reset_token_expire_at: null
      })

    // console.log("respFromUpdateUserMethod: ", respFromUpdateUserMethod);

    res.status(respFromUpdateUserMethod[0]).send({
      success: respFromUpdateUserMethod[0] == 200,
      message: respFromUpdateUserMethod[1]
    })
    return;
  } catch (error) {
    console.log("Error in setNewPassword:", error);
    res.status(400).send({
      success: false,
      a: 3,
      message: error
    })
  }
}


module.exports = {
  login,
  generateAccessToken,
  signOut,
  verifyResetToken,
  generateForgotPasswordLink,
  setNewPassword
};
