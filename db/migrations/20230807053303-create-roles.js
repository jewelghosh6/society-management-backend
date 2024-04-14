'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      role_name:
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
      {
        underscored: true,
      });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('roles');

  }
};
