require('dotenv').config();//{path:'../.env'}

const Sequelize=require('sequelize');

//Option:1 using Passing parameter separately
// const sequelize=new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER_NAME}`,`${process.env.DB_PASSWORD}`,
// {
//     host:'localhost',
//     dialect:'postgres'
// });

// option 2: Using Connection URL(For Render)
const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

(async ()=>  
{
    try {
        await sequelize.authenticate();
        console.log('DB Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports=sequelize;