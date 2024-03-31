'use strict';

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
    await queryInterface.bulkInsert('vehicle_types',
      [
        { vehicleTypeName: 'BIKE', createdAt: new Date(), updatedAt: new Date() },
        { vehicleTypeName: 'CAR', createdAt: new Date(), updatedAt: new Date() }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicle_types', null, {});

  }
};
