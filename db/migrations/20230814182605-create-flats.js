'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('flats', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            flat_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            building_number:
            {
                type: Sequelize.STRING,
                allowNull: false
            },
            flat_area:
            {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            floor_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            total_rooms:
            {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            parking_space_alloted: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            user_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "users",
                    key: "id",
                },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('flats');
    }
};
