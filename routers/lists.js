const { Router } = require("express");
const TodoList = require("../models").todoList;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const lists = await TodoList.findAll();
    res.json(lists);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const lists = await TodoList.findByPk(req.params.id);
    res.json(lists);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
