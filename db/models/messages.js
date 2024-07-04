const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');

const Messages = sequelizeInstance.define('messages',
  {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    message_text:
    {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: //Sender Id
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reference_message_id: //Reference - other msg id, ref for replying to a msg
    {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // conversation_id: {
    // }
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });


module.exports = Messages;