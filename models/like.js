const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Recipe = require('./recipe');

const Like = sequelize.define('Like', {

});

Like.belongsTo(User);
Like.belongsTo(Recipe);

module.exports = Like;