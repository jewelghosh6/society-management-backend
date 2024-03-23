const { encryptPassword } = require("../services/authentication/password");
const { createUser, viewUsersByJoin, updateUserById, viewUserByID, deleteUserById, findUserByKeyword} = require("../services/userService");

//fetch data from frontend
//use CRUD func OR any other func from services
//show return data to the frontend through routes

const registerUser = async (req, res) => {
  try {
    if (req.body !== null) {
      const hashedPassword = await encryptPassword(req.body.password);
      //console.log(hashedPassword);
      // let userData = {
      //   firstName: req.body.firstName,
      //   lastName: req.body.lastName,
      //   mobileNumber: req.body.mobileNumber,
      //   emailId: req.body.emailId,
      //   password: hashedPassword,
      //   isActive: req.body.isActive,
      //  //rolesId: req.body.rolesId,   
      // };
      let userData={...req.body,password: hashedPassword,rolesId:null};
      let response=await createUser(userData);
      res.status(response[0]).send({message:response[1]});
    }
    else res.status(400).send({message:'Cant create user, Request body should not be null'});
  } catch (error) {
    console.log('error registering user');
  }
};

const showUsers = async (req, res) =>   
{  
  let usersObj = await viewUsersByJoin();
  res.send(usersObj);
};

const updateUser= async (req,res) =>
{
  const userId=req.params['id'];
  const userDataToUpdate=req.body;
  let response=await updateUserById(userId,userDataToUpdate);
  res.status(response[0]).send({message:response[1]});
}

const viewUser= async (req,res)=>
{
  const userId=req.params['id'];
  const userObj=await viewUserByID(userId);
  if(userObj) res.send(userObj);  
  else res.status(400).send(`No user found with id: ${userId}`);
}

const removeUser= async (req,res)=>{
  let userId=req.params['id'];
  let resp=await deleteUserById(userId);
  if(resp) res.send(`User with Id ${userId} deleted`);
  else res.send('Can not delete user');
}

//findUserByKeyword("raja");

module.exports = 
{ 
  registerUser, 
  showUsers,
  updateUser,
  viewUser,
  removeUser
 };
