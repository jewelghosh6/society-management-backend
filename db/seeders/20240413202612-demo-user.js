'use strict';

const { encryptPassword } = require('../../services/authentication/password');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Jewel",
        last_name: "Ghosh",
        mobile_number: "9804651712",
        email_id: "jewel@gmail.com",
        password: await encryptPassword("1111"),
        is_active: true,
        is_email_verified: true,
        account_under_review: false,
      },
      {
        first_name: "Raja",
        last_name: "Ghosh",
        mobile_number: "8583898686",
        email_id: "raja@gmail.com",
        password: await encryptPassword("1111"),
        is_active: true,
        is_email_verified: true,
        account_under_review: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
