'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_types',
      [
        { vehicle_type_name: 'CAR' },
        { vehicle_type_name: 'BIKE' },
      ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicle_types', null, {});

  }
};
