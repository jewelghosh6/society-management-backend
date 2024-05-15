const Users = require("../db/models/users");
const Roles = require("../db/models/roles");
const { Op, where } = require('sequelize');
const Permissions = require("../db/models/permissions");
const UserHasPermissions = require("../db/models/userHasPermissions");

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
        is_active: true,
        account_under_review: true,
        email_id: dataToInsert.email,
        created_at: new Date(),
        updated_at: new Date()
      });
      delete createdUserObj.dataValues.password;
      return [201, 'New User Created', createdUserObj.dataValues];
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
        account_under_review: false
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
    // if (usersObj) {
    //   usersObj = usersObj.map(item => {
    //     let perm = item.permissions.map(i => i.permission_name);
    //     return { ...item, permissions: perm }
    //   })
    // }
  } catch (error) {
    console.log(error);
  }
  return usersObj;
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
  let listOfResult = await Users.findAll({
    where: {
      [Op.or]: {
        emailId: {
          [Op.iLike]: `%${keyword}%`              // LIKE '%hat%'
        },
        lastName: {
          [Op.iLike]: `%${keyword}%`              // LIKE '%hat%'
        }
      }
    }
  });
  //console.log(listOfResult);
  listOfResult.forEach(users => {
    console.log(users.dataValues)
  });
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


module.exports = {
  createUser,
  viewUsersByJoin,
  viewUserByID,
  updateUserById,
  deleteUserById,
  findUserByKeyword,
  getAllRegisterReqDeails
};
