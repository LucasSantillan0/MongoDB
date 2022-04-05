const { response } = require("express");
const { request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../Models/User");
const generateToken = require("../helpers/generateToken");

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.status === false) {
      return res.status(500).json({
        msg: "incorrect data",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(500).json({
        msg: "incorrect data",
      });
    }
    const token = await generateToken(user._id);
    res.json(token);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "there was an error",
    });
  }
};
module.exports = login;
