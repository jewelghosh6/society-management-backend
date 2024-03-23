'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
         
      await queryInterface.createTable('users', 
      {
          id:
          {
              type:Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true,
              allowNull:false
          },
          firstName:
          {
              type:Sequelize.STRING(25),
              allowNull:false,
          },
          lastName:
          {
              type:Sequelize.STRING(25),
              allowNull:false,
          },
          mobileNumber:
          {
              type:Sequelize.STRING(10),
              allowNull:false,
          },
          emailId:
          {
              type:Sequelize.STRING(25),
              allowNull:false,
          },
          password:
          {
              type:Sequelize.STRING,
              allowNull:false,
          },
          isActive:
          {
              type:Sequelize.BOOLEAN,
              allowNull:false,
          }
      } 
);
     
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
