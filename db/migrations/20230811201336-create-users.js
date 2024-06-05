'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.addColumn('users', 'password_reset_token', {
            type: Sequelize.STRING,
            allowNull: true, // Set to false if the column should not allow null values
            // defaultValue: null // Set a default value if needed
        });

        await queryInterface.addColumn('users', 'password_reset_token_expire_at', {
            type: Sequelize.DATE,
            allowNull: true, // Set to false if the column should not allow null values
            // defaultValue: null // Set a default value if needed
        });


        // await queryInterface.createTable('users',
        //     {
        //         id:
        //         {
        //             type: Sequelize.INTEGER,
        //             primaryKey: true,
        //             autoIncrement: true,
        //             allowNull: false
        //         },
        //         first_name:
        //         {
        //             type: Sequelize.STRING(25),
        //             allowNull: false,
        //         },
        //         last_name:
        //         {
        //             type: Sequelize.STRING(25),
        //             allowNull: false,
        //         },
        //         mobile_number:
        //         {
        //             type: Sequelize.STRING(15),
        //             allowNull: true,
        //         },
        //         email_id:
        //         {
        //             type: Sequelize.STRING(25),
        //             allowNull: false,
        //             unique: true
        //         },
        //         password:
        //         {
        //             type: Sequelize.STRING,
        //             allowNull: false,
        //         },
        //         is_active:
        //         {
        //             type: Sequelize.BOOLEAN,
        //             allowNull: false,
        //         },
        //         is_email_verified: {
        //             type: Sequelize.BOOLEAN,
        //             allowNull: false
        //         },
        //         account_under_review: {
        //             type: Sequelize.BOOLEAN,
        //             allowNull: false
        //         },
        //         password_reset_token: {
        //             type: Sequelize.STRING,
        //             allowNull: true
        //         },
        //         password_reset_token_expire_at: {
        //             allowNull: true,
        //             type: Sequelize.DATE,
        //         },
        //         // roles_id: {
        //         //     type: Sequelize.INTEGER,
        //         //     allowNull: false,
        //         //     references: {
        //         //         model: "user_roles",
        //         //         key: "id",
        //         //     },
        //         // },
        //         created_at: {
        //             allowNull: false,
        //             type: Sequelize.DATE,
        //             defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        //         },
        //         updated_at: {
        //             allowNull: false,
        //             type: Sequelize.DATE,
        //             defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        //         }
        //     });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');

    }
};
