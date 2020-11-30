const User = require("./models").user;

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (e) {
    console.log(e);
  }
};

// getAllUsers();

const findUserById = async id => {
  try {
    const oneUser = await User.findByPk(id);
    console.log(oneUser);
  } catch (e) {
    console.log(e.message);
  }
};

findUserById(2);
