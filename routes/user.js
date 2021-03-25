const express = require("express");
const router = express.Router();

const users = [
  { id: 1, username: "tuananh" },
  { id: 2, username: "long" },
];

const object = { a: 1, b: 2, c: 3, d: 4 };

router.get("/", (req, res, next) => {
  res.json(users);
});

router.get("/:userId", (req, res, next) => {
  const { userId: id } = req.params;
  res.json(users.find((user) => user.id === parseInt(id)) || "404");
});

module.exports = router;
