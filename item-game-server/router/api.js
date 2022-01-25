const api = require("express").Router();
const { user } = require("../models");

api.get("/api/users", async (req, res) => {
  try {
    let users = await user.findAll({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = api;
