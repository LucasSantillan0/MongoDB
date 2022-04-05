const { request } = require("express");
const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../Models/User");

module.exports = async function createUser(req = request, res = response) {
  try {
    const { google, password, email, ...rest } = req.body;
    const user = new User({ ...rest, email });
    console.log(rest)
    user.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync());
    await user.save();
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};


