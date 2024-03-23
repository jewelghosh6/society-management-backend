const sequelizeObj=require('../utils/db');

const {DataTypes} =require('sequelize');
const Vehicles=require('./vehicles');

const Visitors=sequelizeObj.define('visitors',
{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    firstName:
    {
        type:DataTypes.STRING(15),
        allowNull:false
    },
    lastName:
    {
        type:DataTypes.STRING(15),
        allowNull:false
    },
    mobileNumber:
    {
        type:DataTypes.STRING(10),
        allowNull:false
    },
    visitorsToken:
    {
        type:DataTypes.STRING(5),
        allowNull:true,
        unique:true     
    },
    haveVehicle:
    {
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    clockIn:
    {
        type:DataTypes.DATE,
        allowNull:false
    },
    clockOut:
    {
        type:DataTypes.DATE,
        allowNull:true
    },
    createdBy:
    {
        type:DataTypes.STRING(15),
        allowNull:false
    }
});

Visitors.hasOne(Vehicles);   // 1:1 relation
Vehicles.belongsTo(Visitors);

module.exports=Visitors;