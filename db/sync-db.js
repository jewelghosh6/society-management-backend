const sequelizeInstance = require("./db");

sequelizeInstance
  .sync({ force: true })
  .then(() => console.log("DB synced succcessfully"))
  .catch((err) => console.log(err));
