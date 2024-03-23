const sequelizeObj=require('../utils/db');
const {DataTypes}=require('sequelize');
const Users=require('./users');

const UserRoles=sequelizeObj.define('userRoles',
{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    roleTypes:
    {
        type:DataTypes.STRING(15),
        allowNull:false,
        unique:true
    }
});

UserRoles.hasMany(Users,{foreignKey:'rolesId'});
Users.belongsTo(UserRoles,{foreignKey:'rolesId'});

module.exports=UserRoles;