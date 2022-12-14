const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const CountryProduction = require('./countryProduction');

const AggrGenerationPerType = sequelize.define(
    'agpt',
    {
        country_ID: {
            primaryKey: true,
            type: Sequelize.DataTypes.STRING(2),
            allowNull: false,
        },
        production_type: {
            primaryKey: true,
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            primaryKey: true,
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
        value: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: true
        }
    },
    { timestamps: false }
);

module.exports = AggrGenerationPerType;