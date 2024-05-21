const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');

const ParkingFee = sequelizeInstance.define('parking_fee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    time_parked: {
        type: DataTypes.TIME,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    // created_at: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    // },
    // updated_at: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    // },
},
    {
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

module.exports = ParkingFee;