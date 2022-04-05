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
    req.uid = uuid;
    const user = await User.findById(uuid)
    if(user.role!=='ADMIN'){
        return res.status(401).json({
            msg:'unauthorized'
        })
    }
    next();
  } catch (e) {
    res.status(401).json({
      msg: "invalid token",
    });
  }
};

module.exports = validateJSW;
