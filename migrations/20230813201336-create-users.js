'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('users',
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
                    type: Sequelize.STRING(25),
                    allowNull: false,
                },
                lastName:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false,
                },
                mobileNumber:
                {
                    type: Sequelize.STRING(15),
                    allowNull: true,
                },
                emailId:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false,
                    unique: true
                },
                password:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                isActive:
                {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                rolesId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "user_roles",
                        key: "id",
                    },
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            }
        );

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
