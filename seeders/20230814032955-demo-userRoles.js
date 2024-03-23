'use strict';
// import('sequelize-cli').Migration;
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('userRoles', 
    [
    {roleTypes: 'ADMIN',createdAt: new Date(),updatedAt: new Date()},
    {roleTypes: 'STAFF',createdAt: new Date(),updatedAt: new Date()},
    {roleTypes: 'FLAT-OWNER',createdAt: new Date(),updatedAt: new Date()}
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('userRoles', null, {});

  }
};
