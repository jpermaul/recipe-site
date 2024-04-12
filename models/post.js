const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    title: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    // ingredients: {
    //     type: DataTypes.TEXT, 
    //     allowNull: false
    // }, 
    // instructions: {
    //     type: DataTypes.TEXT, 
    //     allowNull: false
    // }, 
    // servingSize: {
    //     type: DataTypes.INTEGER, 
    //     allowNull: true
    // },
    // imageURL: {
    //    type: DataTypes.STRING,
    //    allowNull: true
    // }
});



module.exports = Recipe;