const bcrypt = require("bcrypt");

const Users = require("../../models/users");
//const UserRoles = require("../../models/user-roles");
const { createAccessToken, createRefreshToken }=require('./generateToken');
const redisClient=require('../../utils/redis-db');

const authenticateUser = async (email, password) => {
  let resArr=[];
  try {
    const userObj = await Users.findOne({
      where: {
        emailId: email,
      },
      // include: [
      //   {
      //     model: UserRoles,
      //     attributes: ["roleTypes"],
      //   },
      // ],
    });

    if (userObj == null) 
    {
      //console.log("User with given email-Id does not exist!");
      resArr= [400, "User with given email-Id does not exist!"];
      return resArr;
    } 
    else 
    {
      let authRes = await bcrypt.compare(password, userObj.password);
      if(!authRes)
      {
        resArr=[401,"Incorrect Password"];
        return resArr;
      }
      else {
        const payload = 
        {
          id:userObj.id,
          emailId: userObj.emailId
          //role: userObj.userRole.roleTypes,   
        };
       let accessToken =createAccessToken(payload);

      let refreshToken=createRefreshToken(payload);

      redisClient.set(userObj.emailId, refreshToken)
      .then((res)=>console.log('Refresh Token saved successfully in redis'+res))
      .catch((err)=>console.log('Error in saving Refresh token in redis'+err));

        resArr=[200,accessToken,refreshToken];
        return resArr;
      }
      //else return false;
    }
  } catch (error) {
    console.log(error);
    resArr=[401,'Unauthenticated'];
    return resArr;
  }
};

module.exports = {
  authenticateUser,
};
