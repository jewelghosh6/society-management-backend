const UserRoles = require("../models/user-roles");
const Users = require("../models/users");
const sequelizeInstance = require("./db");

sequelizeInstance
  .sync({ force: true })
  .then(() => console.log("DB synced succcessfully"))
  .catch((err) => console.log(err));
