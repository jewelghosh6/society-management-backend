const { DataTypes } = require("sequelize");
const sequelizeInstance = require("../db");
const Users = require("./users");
const Permissions = require("./permissions");


const UserHasPermissions = sequelizeInstance.define('user_has_permissions', {
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
  permission_id:
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permissions,
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


//Super Many-To-Many Relationship

Users.belongsToMany(Permissions, { through: UserHasPermissions });
Permissions.belongsToMany(Users, { through: UserHasPermissions });

Permissions.hasMany(UserHasPermissions, { foreignKey: "permission_id" });
UserHasPermissions.belongsTo(Permissions, { foreignKey: "permission_id" });

Users.hasMany(UserHasPermissions, { foreignKey: "user_id" });
UserHasPermissions.belongsTo(Users, { foreignKey: "user_id" });



module.exports = UserHasPermissions;