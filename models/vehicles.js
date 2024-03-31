const sequelizeInstance = require('../utils/db');
const { DataTypes } = require('sequelize');
const ParkingFee = require('./parking-fee');

const Vehicles = sequelizeInstance.define('vehicles',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        registrationNumber:
        {
            type: DataTypes.STRING,
            //unique:true,
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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });

Vehicles.hasOne(ParkingFee, { foreignKey: 'vehicleId' });  //1:1 relation
ParkingFee.belongsTo(Vehicles, { foreignKey: 'vehicleId' });

module.exports = Vehicles;