"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vehicleTypes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vehicleTypeName: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
