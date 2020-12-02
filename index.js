const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");

const User = require("./models").user;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/users", async (request, response, next) => {
  try {
    console.log("request recieved!!");
    const users = await User.findAll();
    response.json(users);
  } catch (e) {
    next(e);
  }
});

app.get("/users/:id", async (req, res, next) => {
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

// request => middleware1 (cors) || middleware2(body-parser) || route/endpoint || error-handler

app.listen(PORT, () => console.log("server running!"));
