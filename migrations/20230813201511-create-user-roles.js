 'use strict';

 // require('sequelize-cli').Migration;
module.exports = {
  async up (queryInterface, Sequelize)
  {
      await queryInterface.createTable('userRoles', { 
        id:
        {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        roleTypes:
        {
            type:Sequelize.STRING(15),
            allowNull:false,
            unique:true
        } }); 
  },

  async down (queryInterface, Sequelize) {
         
      await queryInterface.dropTable('userRoles');
     
  }
};
