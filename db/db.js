require('dotenv').config();//{path:'../.env'}

const Sequelize = require('sequelize');

//Option:1 using Passing parameter separately
const sequelizeInstance=new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER_NAME}`,`${process.env.DB_PASSWORD}`,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true, // This is required for AWS RDS PostgreSQL
        rejectUnauthorized: false // This can be set to true if you have the necessary certificates
      }
    }
});

// option 2: Using Connection URL(For Render)
// const sequelizeInstance = new Sequelize(process.env.DB_CONNECTION_URL);

(async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('DB Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelizeInstance;