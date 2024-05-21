const { encryptPassword } = require("../services/authentication/password");
const { createUser, viewUsersByJoin, updateUserById, viewUserByID, deleteUserById, getAllRegisterReqDeails,
  getRegisterReqDetailsByUserId,
  approveUserRegReqAndAssignRole
} = require("../services/userService");

//fetch data from frontend
//use CRUD func OR any other func from services
//show return data to the frontend through routes

const registerUser = async (req, res) => {
  console.log("req.body", req.body);
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ success: false, message: "Email or password can't be null." });
  }
  try {
    if (req.body) {
      const hashedPassword = await encryptPassword(req.body.password);
      let userData = {
        ...req.body, emailId: req.body.email ? req.body.email : null,
        password: hashedPassword, rolesId: 4, isActive: true
      };
      let response = await createUser(userData);

      res.status(response[0]).send({ success: response[0] !== 400, message: response[1], userData: response[2] });
    }
    else res.status(400).send({ success: false, message: 'Cant create user, Request body should not be null' });
  } catch (error) {
    console.log('error registering user');
  }
};

const showUsers = async (req, res) => {
  try {
    let usersObj = await viewUsersByJoin();
    res.send({ success: true, message: "User Data fetched successfully", data: usersObj });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const userId = req.params['id'];
  const userDataToUpdate = req.body;
  let response = await updateUserById(userId, userDataToUpdate);
  res.status(response[0]).send({ message: response[1] });
}

const viewUser = async (req, res) => {
  const userId = req.params['id'];
  const userObj = await viewUserByID(userId);
  if (userObj) res.send(userObj);
  else res.status(400).send(`No user found with id: ${userId}`);
}

const removeUser = async (req, res) => {
  let userId = req.params['id'];
  let resp = await deleteUserById(userId);
  if (resp) res.send(`User with Id ${userId} deleted`);
  else res.send('Can not delete user');
}

const getAllRegisterRequests = async (req, res) => {
  let resp = await getAllRegisterReqDeails();
  // console.log("resp.........>", resp);
  res.status(200).send({ data: resp, success: true })
}

const getRegisterRequestByUserId = async (req, res) => {
  let userId = req.params.userId;
  let resp = await getRegisterReqDetailsByUserId(userId);
  // console.log("resp.........>", resp);
  res.status(200).send({ data: resp, success: true })
}

const approveRegisterRequestAndAssignRole = async (req, res) => {
  let userId = req.body.userId;
  let roleAndPermissionData = { roles: req.body.roles, permissions: req.body.permissions }
  let resp = await approveUserRegReqAndAssignRole(userId, roleAndPermissionData);
  res.send({ success: true, data: resp })
}

module.exports =
{
  registerUser,
  showUsers,
  updateUser,
  viewUser,
  removeUser,
  getAllRegisterRequests,
  getRegisterRequestByUserId,
  approveRegisterRequestAndAssignRole
};
