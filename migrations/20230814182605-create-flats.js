'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('flats',
     {
         id:
         {
             type:Sequelize.INTEGER,
             primaryKey:true,
             autoIncrement:true,
             allowNull:false
         },
         flatNumber:
         {
             type:Sequelize.INTEGER,
             allowNull:false
         },
         buildingNumber:
         {
             type:Sequelize.STRING,
             allowNull:false
         },
         flatArea:
         {
             type:Sequelize.INTEGER,
             allowNull:false
         },
         totalRooms:
         {
             type:Sequelize.INTEGER,
             allowNull:false
         },
         parkingSpaceAlloted:
         {
             type:Sequelize.BOOLEAN,
             allowNull:false
         }
     });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
