const sequelizeInstance = require('../db');
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
        vehicle_type_name:
        {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
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

VehicleTypes.hasMany(Vehicles, { foreignKey: 'types_id' });
Vehicles.belongsTo(VehicleTypes, { foreignKey: 'types_id' });

module.exports = VehicleTypes;