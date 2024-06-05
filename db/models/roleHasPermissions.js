const { DataTypes } = require("sequelize");
const sequelizeInstance = require("../db");
const Permissions = require("./permissions");
const Roles = require("./roles");

const RoleHasPermissions = sequelizeInstance.define('role_has_permissions', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  permission_id:
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permissions,
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
  // created_at: {
  //   allowNull: false,
  //   type: DataTypes.DATE
  // },
  // updated_at: {
  //   allowNull: false,
  //   type: DataTypes.DATE
  // }
},
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

Roles.belongsToMany(Permissions, { through: RoleHasPermissions });
Permissions.belongsToMany(Roles, { through: RoleHasPermissions });

Permissions.hasMany(RoleHasPermissions, { foreignKey: "permission_id" });
RoleHasPermissions.belongsTo(Permissions, { foreignKey: "permission_id" });

Roles.hasMany(RoleHasPermissions, { foreignKey: "role_id" });
RoleHasPermissions.belongsTo(Roles, { foreignKey: "role_id" });

module.exports = RoleHasPermissions;