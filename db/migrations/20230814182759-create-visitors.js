'use strict';

/** @type {import('sequelize-cli').Migration} */
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
                name:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false
                },
                mobile_number:
                {
                    type: Sequelize.STRING(15),
                    allowNull: false
                },
                address: {
                    type: Sequelize.TEXT,
                    allowNull: false
                },
                person_to_meet:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false
                },
                purpose_of_visit:
                {
                    type: Sequelize.STRING(25),
                    allowNull: false
                },
                //  visitorsToken:
                //  {
                //      type:Sequelize.STRING(5),
                //      allowNull:true,
                //      unique:true     
                //  },
                have_vehicle:
                {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                },
                flat_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    references: {
                        model: "flats",
                        key: "id",
                    },
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
                created_by:
                {
                    type: Sequelize.STRING(15),
                    allowNull: false
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
        await queryInterface.dropTable('visitors');
    }
};
