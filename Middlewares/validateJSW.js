const { response } = require("express");
const { request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const validateJSW = async (req = request, res = response, next) => {
  const token = req.header("jw_token");
  if (!token) {
    return res.status(401).json({
      msg: "unauthorized",
    });
  }
  try {
    const { uuid } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(uuid);
    if (!user || !user.status) {
      return res.status(401).json({
        msg: "unauthorized",
      });
    }
    req.user=user
    next();
  } catch (e) {
    res.status(401).json({
      msg: "invalid token",
    });
  }
};

module.exports = validateJSW;
