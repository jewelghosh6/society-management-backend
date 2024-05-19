'use strict';
/** @type {import('sequelize-cli').Migration} */
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
                first_name:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false,
                },
                last_name:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false,
                },
                mobile_number:
                {
                    type: Sequelize.STRING(15),
                    allowNull: true,
                },
                email_id:
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
                is_active:
                {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                is_email_verified: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                },
                account_under_review: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                },
                // roles_id: {
                //     type: Sequelize.INTEGER,
                //     allowNull: false,
                //     references: {
                //         model: "user_roles",
                //         key: "id",
                //     },
                // },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            },
            {
                underscored: true,
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
