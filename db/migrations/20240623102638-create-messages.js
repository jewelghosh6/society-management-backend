'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages',
      {
        id:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        message_text:
        {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        user_id: //Sender Id
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: {
            model: "users",
            key: "id",
          },
        },
        reference_message_id: //Reference - other msg id, ref for replying to a msg
        {
          allowNull: true,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "messages",
            key: "id",
          },
        },
        conversation_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "conversations",
            key: "id",
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('messages');
  }
};