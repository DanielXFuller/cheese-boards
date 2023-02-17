const sequelize = require('./db');
const User = require('./models/user');
const Board = require('./models/board');
const Cheese = require('./models/cheese');

User.hasMany(Board);
Board.belongsTo(User);
Board.belongsToMany(Cheese, { through: 'BoardCheese' });
Cheese.belongsToMany(Board, { through: 'BoardCheese' });

module.exports = {
    User,
    Board,
    Cheese
};