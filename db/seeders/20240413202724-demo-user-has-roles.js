'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user_has_roles', [
      {
        id: 1,
        user_id: 1,
        role_id: 1,
        created_at: new Date(), updated_at: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_has_roles', null, {});

  }
};
