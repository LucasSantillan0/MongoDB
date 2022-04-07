const { response } = require("express");
const { request } = require("express");

const adminRoleValidator = (req = request, res = response, next) => {
  const { user } = req;
  if (!user) {
    res.status(500);
  }
  if (user.role !== "ADMIN") {
    return res.status(401).json({ msg: "user is not an admin" });
  }
  next();
};

const experimentalRoleValidator = (...roles) => {
  return (req = request, res = response, next) => {
    const { user } = req;
    if (!user) {
      res.status(500);
    }
    const hasRequiredRole = roles.includes(user.role)
    if (!hasRequiredRole) {
      return res
        .status(401)
        .json({ msg: `user is not authorized` });
    }
    next();
  };
};
module.exports = experimentalRoleValidator;
