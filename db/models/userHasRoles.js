const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const Users = require('./users');
const Roles = require('./roles');

const UserHasRoles = sequelizeInstance.define('user_has_roles', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    user_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id",
        },
    },
    role_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Roles,
            key: "id",
        },
    },
    created_at: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updated_at: {
        allowNull: false,
        type: DataTypes.DATE
    }
},
    {
        underscored: true,
    });

Roles.belongsToMany(Users, { through: UserHasRoles });
Users.belongsToMany(Roles, { through: UserHasRoles });

UserHasRoles.belongsTo(Roles, { foreignKey: "role_id" });
UserHasRoles.belongsTo(Users, { foreignKey: "user_id" });

Roles.hasMany(UserHasRoles, { foreignKey: "role_id" });
Users.hasMany(UserHasRoles, { foreignKey: "user_id" });

module.exports = UserHasRoles;