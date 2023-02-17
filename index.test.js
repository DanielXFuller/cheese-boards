const { sequelize } = require('./db');
const { User, Board, Cheese } = require('./models');

describe('Database tests', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    await User.destroy({ where: { id : { [Op.gte]: 0 } } });
    await Board.destroy({ where: { id : { [Op.gte]: 0 } } });
    await Cheese.destroy({ where: { id : { [Op.gte]: 0 } } });
  });

  afterAll(async () => {
    await sequelize.drop();
  })

  describe('User model', () => {

  });

  describe('Board model', () => {

  });

  describe('Cheese model', () => {

  });
});