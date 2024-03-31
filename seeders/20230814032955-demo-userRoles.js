'use strict';
// import('sequelize-cli').Migration;
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_roles',
      [
        { id: 1, roleTypes: 'ADMIN', createdAt: new Date(), updatedAt: new Date() },
        { id: 2, roleTypes: 'STAFF', createdAt: new Date(), updatedAt: new Date() },
        { id: 3, roleTypes: 'FLAT-OWNER', createdAt: new Date(), updatedAt: new Date() },
        { id: 4, roleTypes: 'USER', createdAt: new Date(), updatedAt: new Date() }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('user_roles', null, {});

  }
};
