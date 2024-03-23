'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('vehicles',
      {
          id:
          {
              type:Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true,
              allowNull:false
          },
          registrationNumber:
          {
              type:Sequelize.STRING,
              unique:true,
              allowNull:false
          },
          clockIn:
          {
              type:Sequelize.DATE,
              allowNull:false
          },
          clockOut:
          {
              type:Sequelize.DATE,
              allowNull:true
          },
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
