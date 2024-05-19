const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const Flats = require('./flats');

const Users = sequelizeInstance.define('users',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        last_name:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        mobile_number:
        {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        email_id:
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
        is_active:
        {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        is_email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        account_under_review: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        underscored: true,
    });


Users.hasMany(Flats, { foreignKey: 'user_id' });  //1:M relation
Flats.belongsTo(Users, { foreignKey: 'user_id' });


module.exports = Users;