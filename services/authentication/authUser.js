const bcrypt = require("bcrypt");

const Users = require("../../db/models/users");
const { createAccessToken, createRefreshToken } = require('./generateToken');
const redisClient = require('../../utils/redis-db');
const { getRolesByUserId, getPermissionsByUserId } = require("./rolePermissionService");

const authenticateUser = async (email, password) => {
  let resArr = [];
  try {
    const userObj = await Users.findOne({
      where: {
        email_id: email,
      },
      // include: [
      //   {
      //     model: UserRoles,
      //     attributes: ["roleTypes"],
      //   },
      // ],
    });

    if (userObj == null) {
      //console.log("User with given email-Id does not exist!");
      resArr = [400, "User with given email-Id does not exist!"];
      return resArr;
    }
    else {
      let roles = await getRolesByUserId(userObj.id);
      let permissions = await getPermissionsByUserId(userObj.id);
      let authRes = await bcrypt.compare(password, userObj.password);
      if (!authRes) {
        resArr = [401, "Incorrect Password"];
        return resArr;
      }
      else {
        const payload =
        {
          id: userObj.id,
          email_id: userObj.email_id
          //role: userObj.userRole.roleTypes,   
        };
        let accessToken = createAccessToken(payload);

        let refreshToken = createRefreshToken(payload);

        redisClient.set(userObj.email_id, refreshToken)
          .then((res) => console.log('Refresh Token saved successfully in redis' + res))
          .catch((err) => console.log('Error in saving Refresh token in redis' + err));

        resArr = [200, accessToken, refreshToken, roles, permissions];
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
