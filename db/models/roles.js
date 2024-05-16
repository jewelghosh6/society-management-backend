const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
// const Users = require('./users');
// const UserHasRoles = require('./userHasRoles');

const Roles = sequelizeInstance.define('roles',
  {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    role_name:
    {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description:
    {
      type: DataTypes.STRING,
      allowNull: false,
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

// Roles.belongsToMany(Users, { through: UserHasRoles });

// Roles.hasMany(Users, { foreignKey: 'rolesId' });
// Users.belongsTo(Roles, { foreignKey: 'rolesId' });

module.exports = Roles;