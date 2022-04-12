const { Router } = require("express");
const { check } = require("express-validator");
const erorHandler = require("../controllers/404");
const createUser = require("../controllers/createUser");
const deleteUser = require("../controllers/deleteUser");
const getUsers = require("../controllers/getUsers");
const modifyUser = require("../controllers/modifyUser");
const {
  roleValidator,
  emailValidator,
  idValidator,
} = require("../helpers/validators");
const experimentalRoleValidator = require("../middlewares/roleValidator");
const validateJSW = require("../middlewares/validateJSW");
const validator = require("../middlewares/validator");
const Role = require("../Models/Role");

const router = Router();

router.post(
  "/",
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
router.put(
  "/:id",
  [
    check("id", "id is not valid").isMongoId(),
    check("role").custom(roleValidator),
    check("id").custom(idValidator),
    validator,
  ],
  modifyUser
);
router.get("/", getUsers);
router.delete('/:id', [
  validateJSW,
  experimentalRoleValidator('ADMIN', ),
  check("id").custom(idValidator),
  check("id", "id is not valid").isMongoId(),
  validator
] ,deleteUser )
router.get("*", erorHandler);

module.exports = router;
