const User = require("./models").user;

const userById = async id => {
  try {
    const user = await User.findByPk(id);
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

// User.findAll() => [{}, {}] || []
// User.findOne() => {} || null

const findUserByEmail = async email => {
  try {
    const oneUser = await User.findOne({
      where: { email }, // { email: 'rein@coda..." }
    });
    console.log(oneUser);
  } catch (e) {
    console.log(e.message);
  }
};

const findAllUsersWithSamePassword = async password => {
  try {
    const users = await User.findAll({
      where: { password },
      attributes: ["name", "email"],
    });
    console.log(users.map(u => u.dataValues));
    return null;
  } catch (e) {
    console.log(e.message);
  }
};

findAllUsersWithSamePassword("123");
