"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("parking_fees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      time_parked: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "vehicles",
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
    await queryInterface.dropTable("parking_fees");
  },
};
