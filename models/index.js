const user = require('./user');

User.hasMany(Recipe);
User.hasMany(Comment);
Recipe.belongsTo(User);
Recipe.hasMany(Comment);
Comment.belongsTo(User);


module.exports = { user };
