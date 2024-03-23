const sequelizeObj=require('../utils/db');
const {DataTypes}=require('sequelize');

const Visitors=require('./visitors');

const Flats=sequelizeObj.define('flats',
{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    flatNumber:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    buildingNumber:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    flatArea:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalRooms:
    {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    parkingSpaceAlloted:
    {
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});

Flats.hasMany(Visitors);  //1:M relation
Visitors.belongsTo(Flats);

module.exports=Flats;