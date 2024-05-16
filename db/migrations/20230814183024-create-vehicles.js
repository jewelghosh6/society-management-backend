'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('vehicles',
            {
                id:
                {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                registration_number:
                {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                },
                clock_in:
                {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                clock_out:
                {
                    type: Sequelize.DATE,
                    allowNull: true
                },
                visitor_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "visitors",
                        key: "id",
                    },
                },
                types_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "vehicle_types",
                        key: "id",
                    },
                },
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
            });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('vehicles');
    }
};
