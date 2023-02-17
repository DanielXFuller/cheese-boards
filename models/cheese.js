const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Cheese = sequelize.define('Cheese', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Cheese;
