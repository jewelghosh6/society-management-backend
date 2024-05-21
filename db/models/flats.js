const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');
const Visitors = require('./visitors');

const Flats = sequelizeInstance.define('flats',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        flat_number:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        building_number:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat_area:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_rooms:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        parking_space_alloted:
        {
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

Flats.hasMany(Visitors, { foreignKey: 'flat_id' });  //1:M relation
Visitors.belongsTo(Flats, { foreignKey: 'flat_id' });

module.exports = Flats;