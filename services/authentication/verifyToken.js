require("dotenv").config();
const { createAccessToken } = require("./generateToken");
const jwt = require("jsonwebtoken");
const redisClient = require("../../utils/redis-db");

const verifyRefreshTokenAndGetAccessToken = async (refreshToken) => {
  let resArr = [];

  try {
    let user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);

    console.log("user obj in jwt payload", user);
    let val = await redisClient.get(user.email_id);

    if (!val || val !== refreshToken) {
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

module.exports = {
  verifyRefreshTokenAndGetAccessToken,
  verifyRefreshTokenAndDeleteFromRedis
};
