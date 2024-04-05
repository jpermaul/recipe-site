const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Recipe = require('./recipe');

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT, 
        allowNull: false
    }

});

Comment.belongTo(User);
Comment.belongTo(Recipe);

module.exports = Comment;