const { Router } = require("express");
const { check } = require("express-validator");
const googleSignIn = require("../controllers/googleSignIn");
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
loginRouter.post(
  "/google",
  [
    check("id_token", "id_token is required").notEmpty(),
    validator,
  ],
  googleSignIn
);


module.exports = loginRouter;
