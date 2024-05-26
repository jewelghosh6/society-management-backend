'use strict';

const { getRoleIdByRoleName } = require('../../services/rolesAndPermissionService');
const { getUserIdByUserEmail } = require('../../services/userService');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user_has_roles', [
      {
        user_id: await getUserIdByUserEmail("jewel@gmail.com"),
        role_id: await getRoleIdByRoleName('SUPER-ADMIN'),
      },
      {
        user_id: await getUserIdByUserEmail("raja@gmail.com"),
        role_id: await getRoleIdByRoleName('ADMIN'),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_has_roles', null, {});

  }
};
