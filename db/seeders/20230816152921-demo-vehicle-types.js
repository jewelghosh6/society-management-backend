'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_types',
      [
        { id: 1, vehicle_type_name: 'BIKE', created_at: new Date(), updated_at: new Date() },
        { id: 2, vehicle_type_name: 'CAR', created_at: new Date(), updated_at: new Date() }
      ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicle_types', null, {});

  }
};
