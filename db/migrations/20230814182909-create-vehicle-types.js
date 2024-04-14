"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vehicle_types", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vehicle_type_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
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

    await queryInterface.dropTable('vehicle_types');
  },
};
