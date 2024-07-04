const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const Messages = require('./messages');

const Conversations = sequelizeInstance.define('conversations',
  {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    conversation_name:
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conversation_type:
    {
      type: DataTypes.ENUM("direct", "group"),  // direct - 1 to 1 and group - 1 to Many
      allowNull: false,
    },
    event_key:   //Unique string of 10 digits ,for emiting event from websocket
    {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    display_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    is_public: {  //If true then, any one can see the group and send join request
      type: DataTypes.BOOLEAN,  //For conversation_type 'direct' (1 to 1 chat) its default value is false
      allowNull: false,
    }
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

//1:M relation
Conversations.hasMany(Messages, { foreignKey: 'conversation_id' });
Messages.belongsTo(Conversations, { foreignKey: 'conversation_id' });

module.exports = Conversations;