'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role_has_permissions', [
      //For 'SUPER-ADMIN'
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

      //For 'ADMIN'
      { id: 17, role_id: 2, permission_id: 15, created_at: new Date(), updated_at: new Date() },
      { id: 18, role_id: 2, permission_id: 14, created_at: new Date(), updated_at: new Date() },
      { id: 19, role_id: 2, permission_id: 13, created_at: new Date(), updated_at: new Date() },
      { id: 20, role_id: 2, permission_id: 12, created_at: new Date(), updated_at: new Date() },
      { id: 21, role_id: 2, permission_id: 11, created_at: new Date(), updated_at: new Date() },
      { id: 22, role_id: 2, permission_id: 10, created_at: new Date(), updated_at: new Date() },
      { id: 23, role_id: 2, permission_id: 9, created_at: new Date(), updated_at: new Date() },
      { id: 24, role_id: 2, permission_id: 8, created_at: new Date(), updated_at: new Date() },
      { id: 25, role_id: 2, permission_id: 7, created_at: new Date(), updated_at: new Date() },
      { id: 26, role_id: 2, permission_id: 6, created_at: new Date(), updated_at: new Date() },
      { id: 27, role_id: 2, permission_id: 5, created_at: new Date(), updated_at: new Date() },
      { id: 28, role_id: 2, permission_id: 4, created_at: new Date(), updated_at: new Date() },
      { id: 29, role_id: 2, permission_id: 3, created_at: new Date(), updated_at: new Date() },
      { id: 30, role_id: 2, permission_id: 2, created_at: new Date(), updated_at: new Date() },
      { id: 31, role_id: 2, permission_id: 1, created_at: new Date(), updated_at: new Date() },

      //for SOCIETY MANAGER/PRESIDENT
      { id: 32, role_id: 3, permission_id: 4, created_at: new Date(), updated_at: new Date() },
      { id: 33, role_id: 3, permission_id: 5, created_at: new Date(), updated_at: new Date() },
      { id: 34, role_id: 3, permission_id: 6, created_at: new Date(), updated_at: new Date() },
      { id: 35, role_id: 3, permission_id: 7, created_at: new Date(), updated_at: new Date() },
      { id: 36, role_id: 3, permission_id: 9, created_at: new Date(), updated_at: new Date() },
      { id: 37, role_id: 3, permission_id: 10, created_at: new Date(), updated_at: new Date() },
      { id: 38, role_id: 3, permission_id: 11, created_at: new Date(), updated_at: new Date() },
      { id: 39, role_id: 3, permission_id: 12, created_at: new Date(), updated_at: new Date() },
      { id: 40, role_id: 3, permission_id: 14, created_at: new Date(), updated_at: new Date() },

      //for FLAT-RESIDENT/OWNER
      { id: 41, role_id: 4, permission_id: 11, created_at: new Date(), updated_at: new Date() },
      { id: 42, role_id: 4, permission_id: 15, created_at: new Date(), updated_at: new Date() },
      { id: 43, role_id: 4, permission_id: 7, created_at: new Date(), updated_at: new Date() },
      { id: 44, role_id: 4, permission_id: 5, created_at: new Date(), updated_at: new Date() },
      { id: 45, role_id: 4, permission_id: 17, created_at: new Date(), updated_at: new Date() },

      //WATCH-MAN
      { id: 46, role_id: 6, permission_id: 3, created_at: new Date(), updated_at: new Date() },
      { id: 47, role_id: 6, permission_id: 7, created_at: new Date(), updated_at: new Date() },

      //TENANT
      { id: 48, role_id: 7, permission_id: 17, created_at: new Date(), updated_at: new Date() },
      { id: 49, role_id: 7, permission_id: 7, created_at: new Date(), updated_at: new Date() },
      { id: 50, role_id: 7, permission_id: 15, created_at: new Date(), updated_at: new Date() },

      //STAFF
      { id: 51, role_id: 8, permission_id: 14, created_at: new Date(), updated_at: new Date() },
      { id: 52, role_id: 8, permission_id: 8, created_at: new Date(), updated_at: new Date() },
      { id: 53, role_id: 8, permission_id: 9, created_at: new Date(), updated_at: new Date() },
      { id: 54, role_id: 8, permission_id: 3, created_at: new Date(), updated_at: new Date() },


    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_has_permissions', null, {});
  }
};
