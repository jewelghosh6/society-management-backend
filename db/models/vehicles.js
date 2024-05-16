const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const ParkingFee = require('./parkingFee');

const Vehicles = sequelizeInstance.define('vehicles',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        registration_number:
        {
            type: DataTypes.STRING,
            //unique:true,
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

Vehicles.hasOne(ParkingFee, { foreignKey: 'vehicle_id' });  //1:1 relation
ParkingFee.belongsTo(Vehicles, { foreignKey: 'vehicle_id' });

module.exports = Vehicles;