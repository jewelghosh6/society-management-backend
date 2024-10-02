const Users = require("../db/models/users");
const Roles = require("../db/models/roles");
const { Op, where } = require('sequelize');
const Permissions = require("../db/models/permissions");
const UserHasPermissions = require("../db/models/userHasPermissions");
const { assignRoleByUserId } = require("./rolesAndPermissionService");

const createUser = async (dataToInsert) => {
  try {
    let userObj = await Users.findOne({
      where: {
        email_id: dataToInsert.email
      }
    })
    console.log("fonud UserObj", userObj?.dataValues);

    if (!userObj) {
      let createdUserObj = await Users.create({
        ...dataToInsert,
        first_name: dataToInsert.firstName,
        last_name: dataToInsert.lastName,
        is_active: false,
        is_email_verified: false,
        account_under_review: true,
        email_id: dataToInsert.email,
        mobile_number: dataToInsert.mobile,
        // created_at: new Date(),
        // updated_at: new Date()
      });
      delete createdUserObj.dataValues.password;
      return [201, 'Register request received', createdUserObj.dataValues];
    }

    else return [400, 'A User with the same mailId already present'];

  } catch (error) {
    console.log(error);
    return [400, 'Can not create a user Error:' + error];
  }
};

const viewUsersByJoin = async () => {
  let usersObj;
  try {
    usersObj = await Users.findAll({
      attributes: [
        "id",
        "first_name",
        "last_name",
        "mobile_number",
        "email_id",
        "is_active",
      ],
      where: {
        account_under_review: false,
      },
      include: [
        {
          model: Roles, // will create a left join
          attributes: ["role_name"],
        },
        {
          model: Permissions,
          attributes: ["permission_name"],
          // exclude: [{ model: UserHasPermissions }]
        }
      ],
    });

  } catch (error) {
    console.log(error);
  }
  return usersObj;
};

const getUsersByRoleName = async (roleName) => {
  let usersObj;
  try {
    usersObj = await Users.findAll({
      attributes: [
        "id",
        "first_name",
        "last_name",
        "mobile_number",
        "email_id",
        "is_active",
      ],
      where: {
        account_under_review: false,
      },
      include: [
        {
          model: Roles, // will create a left join
          attributes: ["role_name"],
          where: {
            role_name: roleName
          },
        },
      ],
    });

  } catch (error) {
    console.log(error);
  }
  return usersObj.map(item => item.dataValues);
};

const viewUserByID = async (userId) => {
  let userObj
  try {
    userObj = await Users.findOne({
      where: { id: userId },
      attributes: [
        "id",
        "firstName",
        "lastName",
        "mobileNumber",
        "emailId",
        "isActive",
      ],
      include: [
        {
          model: Roles, // will create a left join
          attributes: ["role_name"],
        },
      ],
    });
    console.log(userObj);

  } catch (error) {
    console.log(error)
  }
  return userObj;
};

const updateUserById = async (userId, dataToUpdate) =>  //for Updating a Entry/Row By Id
{
  let resArr;
  try {
    let resp = await Users.update(dataToUpdate, {
      where:
      {
        id: userId,
      },
    });
    console.log('resp: ' + resp);
    resArr = (resp == 1) ? [200, 'User updated successfully'] : [400, 'Can not update User as UserId is invalid'];
  } catch (error) {
    console.log(error);
    resArr = [400, 'Can not update User'];
  }
  return resArr;
};

// const updateUserByMailId=async (mail,dataToUpdate)=>{
//   try {

//   } catch (error) {

//   }
// }

const deleteUserById = async (userId) => //for Deleting a Entry/Row by Id
{
  try {
    let resp = await Users.destroy({
      where: {
        id: userId,
      },
    });
    console.log(resp);
    return resp;

  } catch (error) {
    console.log(error);
    return error;
  }
};

const findUserByKeyword = async (keyword) => {
  try {
    let listOfResult = await Users.findAll({
      where: {
        [Op.or]: {
          email_id: {
            [Op.iLike]: `%${keyword}%`              // LIKE '%hat%'
          },
          last_name: {
            [Op.iLike]: `%${keyword}%`              // LIKE '%hat%'
          },
          first_name: {
            [Op.iLike]: `%${keyword}%`              // LIKE '%hat%'
          }
        }
      }
    });
    //console.log(listOfResult);
    return listOfResult.map(users => users.dataValues);
  } catch (error) {
    console.log(error);
    throw error;
    // return error;
  }
}


const getAllRegisterReqDeails = async () => {
  let registeRequestedUsersObj;
  try {
    registeRequestedUsersObj = await Users.findAll({
      attributes: [
        "id",
        "first_name",
        "last_name",
        "mobile_number",
        "email_id",
        "is_active",
        "created_at"
      ],
      where: {
        account_under_review: true
      },
    })
    return registeRequestedUsersObj;
  } catch (error) {
    console.error(error);
  }
}

const getRegisterReqDetailsByUserId = async (userId) => {
  try {
    let userReqDeails = await Users.findOne({
      where: {
        id: userId
      },
      attributes: [
        "id",
        "first_name",
        "last_name",
        "mobile_number",
        "email_id",
        "is_active",
        "account_under_review"
      ],
    })
    return userReqDeails.dataValues
  } catch (error) {
    console.log(error);

  }
}

const approveUserRegReqAndAssignRole = async (userId, roleAndPermissionData) => {
  try {
    let resFromUpdateUser = await updateUserById(userId, { is_active: true, account_under_review: false });
    // console.log("resFromUpdateUser", resFromUpdateUser);
    let resfromAsignRole = await assignRoleByUserId(userId, roleAndPermissionData)
    return { user: resFromUpdateUser, role: resfromAsignRole }

  } catch (error) {
    console.log(error);
  }
}

const getUserIdByUserEmail = async (email) => {
  try {
    let userIns = await Users.findOne({
      where: {
        email_id: email
      },
      attributes: ["id"]
    })
    return userIns.dataValues.id;
    // console.log("userIns", userIns.dataValues);
  } catch (error) {
    console.log(error);
  }
}

const getUserByEmailId = async (email) => {
  try {
    let userObj = await Users.findOne({
      where: {
        email_id: email,
      },
    });
    return userObj;
  } catch (error) {
    console.error(error);
    return null;
  }

}

// getUserIdByUserEmail("jewel@gmail.com")

// const getUsersListByRoleName = async (roleName) => {
//   try {
//     let resp = await Users.findAll({
//       include: [
//         {
//           model: Roles,
//           where: {
//             role_name: "FLAT-RESIDENT/OWNER"
//           }

//         }
//       ]
//     });
//     console.log(resp.map(item => { return { ...item.dataValues, ...item.dataValues.roles[0].dataValues } }));
//   } catch (error) {
//     console.error(error);
//   }
// }

// getFlatOwnersListFromDb()


module.exports = {
  createUser,
  viewUsersByJoin,
  viewUserByID,
  updateUserById,
  deleteUserById,
  findUserByKeyword,
  getAllRegisterReqDeails,
  getRegisterReqDetailsByUserId,
  approveUserRegReqAndAssignRole,
  getUserIdByUserEmail,
  getUserByEmailId,
  getUsersByRoleName
};
