const { response } = require("express");
const { request } = require("express");
const User = require("../Models/User");

const getUsers = async (req = request, res = response) => {
  const { limit = 5, since = 0 } = req.query;
  const [users, userLength] = await Promise.all([
    User.find({ status: true }).limit(Number(limit)).skip(Number(since)),
    User.countDocuments(),
  ]);
  res.json({
    userLength,
    users,
  });
};
module.exports = getUsers;
