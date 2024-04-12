const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post extends Model {}
Post.init(
    {
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
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}

);



module.exports = Post;