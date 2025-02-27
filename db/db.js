require('dotenv').config();//{path:'../.env'}

const Sequelize = require('sequelize');

//Option:1 using Passing parameter separately
// const sequelizeInstance=new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER_NAME}`,`${process.env.DB_PASSWORD}`,{
//     host:process.env.DB_HOST,
//     dialect:process.env.DB_DIALECT,
//     // dialectOptions: {
//     //   ssl: {
//     //     require: true, // This is required for AWS RDS PostgreSQL
//     //     rejectUnauthorized: false // This can be set to true if you have the necessary certificates
//     //   }
//     // }
// });

// option 2: Using Connection URL(For Render)
// const sequelizeInstance = new Sequelize(process.env.DB_CONNECTION_URL);

//for supabase
const sequelizeInstance = new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER_NAME}`,`${process.env.DB_PASSWORD}`, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Use the session pooler port (6543)
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for Supabase
    },
  },
  pool: {
    max: 10, // Max connections in the pool
    min: 2,
    acquire: 30000,
    idle: 10000,
  },
});

(async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('DB Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelizeInstance;