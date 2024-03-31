const sequelizeInstance = require('../utils/db');
const { DataTypes } = require('sequelize');
const Vehicles = require('./vehicles');

const VehicleTypes = sequelizeInstance.define('vehicle_types',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vehicleTypeName:
        {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
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

VehicleTypes.hasMany(Vehicles, { foreignKey: 'typesId' });
Vehicles.belongsTo(VehicleTypes, { foreignKey: 'typesId' });

module.exports = VehicleTypes;