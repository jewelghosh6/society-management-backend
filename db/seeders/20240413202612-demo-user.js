'use strict';

const { encryptPassword } = require('../../services/authentication/password');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: "Jewel",
        last_name: "Ghosh",
        mobile_number: "9804651712",
        email_id: "jewel@gmail.com",
        password: await encryptPassword("1111"),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        first_name: "Raja",
        last_name: "Ghosh",
        mobile_number: "8583898686",
        email_id: "raja@gmail.com",
        password: await encryptPassword("1111"),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
