const { Router } = require("express");
const User = require("../models").user;

const { failRandomly } = require("../middlewares");

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    // console.log("request recieved!!");
    // console.log("was it logged?", request.logged);
    const users = await User.findAll();
    response.json(users);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", failRandomly, async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("User with that id not found");
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const user = await User.findByPk(id);
    if (!name && !email && !phone) {
      return res.status(400).send("missing parameters");
    }
    if (!user) {
      return res.status(404).send("User with that id does not exist");
    }

    await user.update({ name });

    res.send(user);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("missing parameters");
    }
    const newUser = await User.create({ name, email, password });

    res.send(newUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
