const { Router } = require("express");
const { check } = require("express-validator");
const erorHandler = require("../controllers/404");
const createUser = require("../controllers/createUser");
const { roleValidator, emailValidator } = require("../helpers/validators");
const validator = require("../middlewares/validator");
const Role = require("../Models/Role");

const router = Router();

router.get("*", erorHandler);
router.post(
  "/user",
  [
    check("name", "name must be valid").notEmpty(),
    check("password", "password must be valid").isLength({ min: 6 }),
    check("email", "email must be valid").isEmail(),
    check("role").custom(roleValidator),
    check("email").custom(emailValidator),
    validator,
  ],
  createUser
);

module.exports = router;
