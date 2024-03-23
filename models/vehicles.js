const sequelizeObj=require('../utils/db');
const {DataTypes}=require('sequelize');
const ParkingFee=require('./parking-fee');

const Vehicles=sequelizeObj.define('vehicles',
{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    registrationNumber:
    {
        type:DataTypes.STRING,
       //unique:true,
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
    }
});

Vehicles.hasOne(ParkingFee);  //1:1 relation
ParkingFee.belongsTo(Vehicles);

module.exports=Vehicles;