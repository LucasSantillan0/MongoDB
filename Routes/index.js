const { Router } = require("express");
const { check } = require("express-validator");
const erorHandler = require("../Controllers/404");
const createUser = require("../Controllers/createUser");
const validator = require('../Middlewares/validator')

const router = Router();

router.get("*", erorHandler);
router.post(
  "/user",
  [
    check("name", "name must be valid").notEmpty(),
    check("password", "password must be valid").isLength({ min: 6 }),
    check("email", "email must be valid").isEmail(),
    check("role", "role must be valid").isIn(["ADMIN", "USER"]),
    validator
  ],
  createUser
);

module.exports = router;
