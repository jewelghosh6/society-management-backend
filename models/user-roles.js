const sequelizeInstance = require('../utils/db');
const { DataTypes } = require('sequelize');
const Users = require('./users');

const UserRoles = sequelizeInstance.define('user_roles',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        roleTypes:
        {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
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

UserRoles.hasMany(Users, { foreignKey: 'rolesId' });
Users.belongsTo(UserRoles, { foreignKey: 'rolesId' });

module.exports = UserRoles;