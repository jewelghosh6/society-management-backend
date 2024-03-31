const sequelizeInstance = require('../utils/db');
const { DataTypes } = require('sequelize');

const Flats = require('./flats');
//const UserRoles=require('./user-roles');

const Users = sequelizeInstance.define('users',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        lastName:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        mobileNumber:
        {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        emailId:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive:
        {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });

Users.hasMany(Flats, { foreignKey: 'userId' });  //1:M relation
Flats.belongsTo(Users, { foreignKey: 'userId' });


module.exports = Users;