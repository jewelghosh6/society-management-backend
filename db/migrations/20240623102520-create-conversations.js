'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conversations',
      {
        id:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        conversation_name:
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        conversation_type:
        {
          type: Sequelize.ENUM("direct", "group"),  //For direct - 1 to 1 and group - 1 to Many
          allowNull: false,
        },
        event_key:   //Unique string of 10 digits ,for emiting event from websocket
        {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true
        },
        display_image_url: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true
        },
        is_public: {  //If true then, any one can see the group and send join request
          type: Sequelize.BOOLEAN,  //For conversation_type 'direct' (1 to 1 chat) its default value is false
          allowNull: false,
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
    await queryInterface.dropTable('conversations');
  }
};