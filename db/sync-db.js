const sequelizeInstance = require("./db");
const Users = require("./models/users");

sequelizeInstance
  .sync({ force: true })
  .then(() => console.log("DB synced succcessfully"))
  .catch((err) => console.log(err));
