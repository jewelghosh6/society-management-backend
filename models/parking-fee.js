const sequelizeInstance = require('../utils/db');
const { DataTypes } = require('sequelize');
//const Vehicles =require('../models/vehicles');


const ParkingFee = sequelizeInstance.define('parkingFee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    timeParked: {
        type: DataTypes.TIME,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paymentId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
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

module.exports = ParkingFee;