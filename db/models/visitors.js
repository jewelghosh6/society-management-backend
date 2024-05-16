const sequelizeInstance = require('../db');

const { DataTypes } = require('sequelize');
const Vehicles = require('./vehicles');

const Visitors = sequelizeInstance.define('visitors',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:
        {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        mobile_number:
        {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        person_to_meet:
        {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        purpose_of_visit:
        {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // visitorsToken:
        // {
        //     type: DataTypes.STRING(5),
        //     allowNull: true,
        //     unique: true
        // },
        have_vehicle:
        {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        clock_in:
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        clock_out:
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        created_by:
        {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        underscored: true,
    });

Visitors.hasOne(Vehicles, { foreignKey: 'visitor_id' });   // 1:1 relation
Vehicles.belongsTo(Visitors, { foreignKey: 'visitor_id' });

module.exports = Visitors;