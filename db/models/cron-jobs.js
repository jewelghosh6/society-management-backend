const sequelizeInstance = require('../db');
const { DataTypes } = require('sequelize');

const CronJobs = sequelizeInstance.define('cron_jobs',
  {
    id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // created_at: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // },
    // updated_at: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // },
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

module.exports = CronJobs;