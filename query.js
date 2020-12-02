const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const userById = async id => {
  try {
    const user = await User.findByPk(id);
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

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

const getUserAndListsAndItems = async id => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: TodoList, include: [{ model: TodoItem }] }],
    });
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

const listAndItems = async id => {
  try {
    const list = await TodoList.findByPk(id, {
      include: [{ model: TodoItem }],
    });
    console.log(list.dataValues);
  } catch (e) {
    console.log(e.message);
  }
};

getUserAndListsAndItems(1);
