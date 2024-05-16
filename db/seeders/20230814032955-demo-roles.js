'use strict';
// import('sequelize-cli').Migration;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles',
      [
        { id: 1, role_name: 'SUPER-ADMIN', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 2, role_name: 'ADMIN', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 3, role_name: 'SOCIETY MANAGER/PRESIDENT', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 4, role_name: 'FLAT-RESIDENT/OWNER', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 5, role_name: 'USER', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 6, role_name: 'WATCH-MAN', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 7, role_name: 'TENANT', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 8, role_name: 'STAFF', description: "some description", created_at: new Date(), updated_at: new Date() },

      ]//tenants, watchman
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});

  }
};
