require("dotenv").config();
const { createAccessToken } = require("./generateToken");
const jwt = require("jsonwebtoken");
const redisClient = require("../../utils/redis-db");

const verifyRefreshTokenAndGetAccessToken = async (refreshToken) => {
  let resArr = [];

  try {
    jwt.verify
    let user = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);

    console.log(user);
    let val = await redisClient.get(user.emailId);

    if (!val || val !== refreshToken) 
    {
      resArr = [403, "Invalid refresh token"];
      //console.log(resArr);
    } 
    else 
    {
      let newAccessToken = createAccessToken({id: user.id,emailId: user.emailId});
      resArr = [200, newAccessToken];
    }
  } catch (error) {
   // console.log("error in jwt verify" + error);
    resArr = [403, `Invalid refresh token ${error}`];
  }
  return resArr;
};

const verifyRefreshTokenAndDeleteFromRedis= async (refreshToken)=>
{
  let resArr=[];
  try {
   let user= jwt.verify(refreshToken,process.env.JWT_REFRESH_TOKEN_SECRET);
   let refreshTokenInRedis=await redisClient.get(user.emailId);
   console.log('Refresh Token In Redis: '+refreshTokenInRedis);

   if(refreshTokenInRedis && refreshTokenInRedis==refreshToken){
    await redisClient.del(user.emailId);
    resArr=[204,`RefeshToken deleted from redis for ${user.emailId}`];
   }else{
    resArr=[403,'User already loggedout'];
   }
     
  } catch (error) {
    resArr=[403,'Invalid refresh Token'];
  }
  return resArr;
}

module.exports = {
  verifyRefreshTokenAndGetAccessToken,
  verifyRefreshTokenAndDeleteFromRedis
};
