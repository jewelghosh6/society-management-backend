'use strict';
// import('sequelize-cli').Migration;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles',
      [
        { role_name: 'SUPER-ADMIN', description: "some description" },
        { role_name: 'ADMIN', description: "some description" },
        { role_name: 'SOCIETY-MANAGER/PRESIDENT', description: "some description" },
        { role_name: 'FLAT-RESIDENT/OWNER', description: "some description" },
        { role_name: 'USER', description: "some description" },
        { role_name: 'WATCH-MAN', description: "some description" },
        { role_name: 'TENANT', description: "some description" },
        { role_name: 'STAFF', description: "some description" },

      ]//tenants, watchman
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});

  }
};
