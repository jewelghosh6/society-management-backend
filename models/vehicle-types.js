const sequelizeObj=require('../utils/db');
const {DataTypes}=require('sequelize');
const Vehicles=require('./vehicles');

const VehicleTypes=sequelizeObj.define('vehicleTypes',
{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    vehicleTypeName:
    {
        type:DataTypes.STRING(10),
        allowNull:false,
        unique:true
    }
});

VehicleTypes.hasMany(Vehicles,{foreignKey:'typesId'});  
Vehicles.belongsTo(VehicleTypes,{foreignKey:'typesId'});

module.exports=VehicleTypes;