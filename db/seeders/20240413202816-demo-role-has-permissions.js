'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role_has_permissions', [
      { id: 1, role_id: 1, permission_id: 1, created_at: new Date(), updated_at: new Date() },
      { id: 2, role_id: 1, permission_id: 2, created_at: new Date(), updated_at: new Date() },
      { id: 3, role_id: 1, permission_id: 3, created_at: new Date(), updated_at: new Date() },
      { id: 4, role_id: 1, permission_id: 4, created_at: new Date(), updated_at: new Date() },
      { id: 5, role_id: 1, permission_id: 5, created_at: new Date(), updated_at: new Date() },
      { id: 6, role_id: 1, permission_id: 6, created_at: new Date(), updated_at: new Date() },
      { id: 7, role_id: 1, permission_id: 7, created_at: new Date(), updated_at: new Date() },
      { id: 8, role_id: 1, permission_id: 8, created_at: new Date(), updated_at: new Date() },
      { id: 9, role_id: 1, permission_id: 9, created_at: new Date(), updated_at: new Date() },
      { id: 10, role_id: 1, permission_id: 10, created_at: new Date(), updated_at: new Date() },
      { id: 11, role_id: 1, permission_id: 11, created_at: new Date(), updated_at: new Date() },
      { id: 12, role_id: 1, permission_id: 12, created_at: new Date(), updated_at: new Date() },
      { id: 13, role_id: 1, permission_id: 13, created_at: new Date(), updated_at: new Date() },
      { id: 14, role_id: 1, permission_id: 14, created_at: new Date(), updated_at: new Date() },
      { id: 15, role_id: 1, permission_id: 15, created_at: new Date(), updated_at: new Date() },
      { id: 16, role_id: 1, permission_id: 16, created_at: new Date(), updated_at: new Date() },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_has_permissions', null, {});
  }
};
