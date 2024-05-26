const bcrypt = require("bcrypt");

const Users = require("../../db/models/users");
const { createAccessToken, createRefreshToken } = require('./generateToken');
const redisClient = require('../../utils/redis-db');
const { getRolesByUserId, getPermissionsByUserId } = require("./rolePermissionService");
const { getPermissionsByRoleName } = require("../rolesAndPermissionService");

const authenticateUser = async (email, password) => {
  let resArr = [];
  try {

    //FOR 1 Logged in user at a time (Have to implement)
    // let resFromRedis = await redisClient.get(email);
    // console.log("resFromRedis", resFromRedis);
    // if (resFromRedis) {
    //   return resArr = [400, "A User already signed in with same mail"];
    // }

    let userObj = await Users.findOne({
      where: {
        email_id: email,
      },
    });
    // console.log("userObj", userObj.password);


    if (userObj == null) {
      resArr = [400, "User with given email-Id does not exist!"];
      return resArr;
    }
    else {
      userObj = userObj.dataValues;
      let authRes = await bcrypt.compare(password, userObj.password);
      if (!authRes) {
        resArr = [401, "Incorrect Password"];
        return resArr;
      }
      else {
        const payload = {
          id: userObj.id,
          email_id: userObj.email_id
          //role: userObj.userRole.roleTypes,   
        };

        let accessToken = createAccessToken(payload);
        let refreshToken = createRefreshToken(payload);

        let role = await getRolesByUserId(userObj.id);
        let permissions = await getPermissionsByUserId(userObj.id);
        if (!permissions.length) {
          permissions = await getPermissionsByRoleName(role);

        }

        redisClient.set(userObj.email_id, refreshToken);

        // redisClient.setEx(userObj.email_id, 60, JSON.stringify({ accessToken, refreshToken }))
        //   .then((res) => console.log('Refresh Token saved successfully in redis' + res))
        //   .catch((err) => console.log('Error in saving Refresh token in redis' + err));
        delete userObj.password;

        resArr = [200, accessToken, refreshToken, { role: role, permissions: permissions, ...userObj },]

        return resArr;
      }
      //else return false;
    }
  } catch (error) {
    console.log(error);
    resArr = [401, 'Unauthenticated'];
    return resArr;
  }
};

module.exports = {
  authenticateUser,
};
