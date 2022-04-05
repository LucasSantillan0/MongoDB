const { Router } = require("express");
const { check } = require("express-validator");
const login = require("../controllers/login");
const validator = require("../middlewares/validator");

const loginRouter = Router();

loginRouter.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").notEmpty(),
    validator,
  ],
  login
);

module.exports = loginRouter;
