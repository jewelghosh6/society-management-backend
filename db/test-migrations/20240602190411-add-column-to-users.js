'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // await queryInterface.addColumn('users', 'password_reset_token', {
    //   type: Sequelize.STRING,
    //   allowNull: true, // Set to false if the column should not allow null values
    //   // defaultValue: null // Set a default value if needed
    // });

    // await queryInterface.addColumn('users', 'password_reset_token_expire_at', {
    //   type: Sequelize.DATE,
    //   allowNull: true, // Set to false if the column should not allow null values
    //   // defaultValue: null // Set a default value if needed
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'password_reset_token', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
    await queryInterface.removeColumn('users', 'password_reset_token_expire_at', {
      type: Sequelize.DATE,
      allowNull: true, 
    });
  }
};
