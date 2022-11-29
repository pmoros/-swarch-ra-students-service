const express = require("express");
const users = require("../controllers/users");
const router = new express.Router();

router.get("/", async (req, res, next) => {
  let options = {
    username: req.query.username,
  };

  try {
    const result = await users.get(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || "Something went wrong.",
    });
  }
});

router.post("/", async (req, res, next) => {
  let options = {};

  options.users = req.body;

  try {
    const result = await users.find(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || "Something went wrong.",
    });
  }
});

module.exports = router;
