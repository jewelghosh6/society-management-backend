'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('flats', 'user_id', {
      allowNull: true,
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('flats', 'user_id', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
  }
};
