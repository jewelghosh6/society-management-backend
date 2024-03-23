const sequelize = require("./db");

sequelize
  .sync({ force: true })
  .then(() => console.log("DB synced succcessfully"))
  .catch((err) => console.log(err));
