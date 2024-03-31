const sequelizeInstance = require('../utils/db');

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
        firstName:
        {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        lastName:
        {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        mobileNumber:
        {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        // visitorsToken:
        // {
        //     type: DataTypes.STRING(5),
        //     allowNull: true,
        //     unique: true
        // },
        haveVehicle:
        {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        clockIn:
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        clockOut:
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        createdBy:
        {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });

Visitors.hasOne(Vehicles, { foreignKey: 'visitorId' });   // 1:1 relation
Vehicles.belongsTo(Visitors, { foreignKey: 'visitorId' });

module.exports = Visitors;