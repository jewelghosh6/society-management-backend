require("dotenv").config();
const { createAccessToken } = require("./generateToken");
const jwt = require("jsonwebtoken");
const redisClient = require("../../utils/redis-db");
const Users = require("../../db/models/users");
const { decryptData } = require("../URLEncodeDecodeServices");
const bcrypt = require('bcrypt')

const verifyRefreshTokenAndGetAccessToken = async (refreshToken) => {
  let resArr = [];

  try {
    let user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);

    console.log("user obj in jwt payload", user);
    let refreshTokenInRedis = await redisClient.get(user.email_id);

    if (!refreshTokenInRedis || refreshTokenInRedis !== refreshToken) {
      return [401, "Invalid refresh token"];
    }
    else {
      let newAccessToken = createAccessToken({ id: user.id, email_id: user.email_id });
      resArr = [200, newAccessToken];
    }
  } catch (error) {
    // console.log("error in jwt verify" + error);
    resArr = [401, { success: false, message: `Invalid refresh token ${error}` }];
  }
  return resArr;
};

const verifyRefreshTokenAndDeleteFromRedis = async (refreshToken) => {
  let resArr = [];
  try {
    let user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
    let refreshTokenInRedis = await redisClient.get(user.email_id);
    console.log('Refresh Token In Redis: ' + refreshTokenInRedis);

    if (refreshTokenInRedis && refreshTokenInRedis == refreshToken) {
      await redisClient.del(user.email_id);
      resArr = [204, `RefeshToken deleted from redis for ${user.email_id}`];
    } else {
      resArr = [401, 'User already loggedout'];
    }

  } catch (error) {
    resArr = [401, 'Invalid refresh Token'];
  }
  return resArr;
}

const verifyPasswordResetToken = async (encryptedResetTokenAndMail) => {
  console.log("encryptedResetTokenAndMail~~~~~", encryptedResetTokenAndMail);
  try {   //  let dataToEncryptForURL = `${resetToken}#${userObj.email_id}`;
    let decryptedData = decryptData(encryptedResetTokenAndMail);
    let decryptedDataArr = decryptedData.split("#");
    let resetToken = decryptedDataArr[0];
    let email = decryptedDataArr[1];


    let foundUserObj = await Users.findOne({
      where: {
        email_id: email
      }
    })
    if (!foundUserObj.password_reset_token || !bcrypt.compareSync(resetToken, foundUserObj.password_reset_token)) {
      return [400, "Invalid password reset token"];
    }
    else if (foundUserObj.password_reset_token_expire_at < Date.now()) {
      return [400, "Password reset token expired"]
    }
    else {
      return [200, "Token verified", foundUserObj]
    }

  } catch (error) {
    console.error("error>>>>>>>>>>", error);
    return [400, error]
  }

}

module.exports = {
  verifyRefreshTokenAndGetAccessToken,
  verifyRefreshTokenAndDeleteFromRedis,
  verifyPasswordResetToken
};
