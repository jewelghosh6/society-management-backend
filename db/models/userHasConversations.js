const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const Users = require('./users');
const Conversations = require('./conversations');

const UserHasConversations = sequelizeInstance.define('user_has_conversations', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  conversation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Conversations,
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
},
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

Users.belongsToMany(Conversations, { through: UserHasConversations });
Conversations.belongsToMany(Users, { through: UserHasConversations });

Conversations.hasMany(UserHasConversations, { foreignKey: "conversation_id" });
UserHasConversations.belongsTo(Conversations, { foreignKey: "conversation_id" });

Users.hasMany(UserHasConversations, { foreignKey: "user_id" });
UserHasConversations.belongsTo(Users, { foreignKey: "user_id" });

module.exports = UserHasConversations;