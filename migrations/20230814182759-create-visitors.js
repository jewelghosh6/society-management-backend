'use strict';

//** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('visitors',
            {
                id:
                {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                firstName:
                {
                    type: Sequelize.STRING(15),
                    allowNull: false
                },
                lastName:
                {
                    type: Sequelize.STRING(15),
                    allowNull: false
                },
                mobileNumber:
                {
                    type: Sequelize.STRING(10),
                    allowNull: false
                },
                //  visitorsToken:
                //  {
                //      type:Sequelize.STRING(5),
                //      allowNull:true,
                //      unique:true     
                //  },
                haveVehicle:
                {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                },
                clockIn:
                {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                clockOut:
                {
                    type: Sequelize.DATE,
                    allowNull: true
                },
                createdBy:
                {
                    type: Sequelize.STRING(15),
                    allowNull: false
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
