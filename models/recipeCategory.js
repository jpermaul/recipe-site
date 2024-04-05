const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const RecipeCategory = sequelize.define('RecipeCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true

    }
});

module.exports = RecipeCategory;