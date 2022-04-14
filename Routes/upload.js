const { Router } = require("express");
const { check } = require("express-validator");
const getImage = require("../controllers/getImage");
const login = require("../controllers/login");
const updateImage = require("../controllers/updateImage");
const uploadImage = require("../controllers/uploadImage");
const collectionIdValidator = require("../middlewares/collectionIdValidator");
const validateJSW = require("../middlewares/validateJSW");
const validator = require("../middlewares/validator");

const uploadRouter = Router();

uploadRouter.post("/", [validateJSW], uploadImage);
uploadRouter.put(
  "/:collection/:id",
  [
    validateJSW,
    check("id").isMongoId(),
    check("collection").custom((collection) =>
      ["users", "products"].includes(collection)
    ),
    validator,
    collectionIdValidator,
  ],
  updateImage
);
uploadRouter.get(
  "/:collection/:id",
  [
    validateJSW,
    check("id").isMongoId(),
    check("collection").custom((collection) =>
      ["users", "products"].includes(collection)
    ),
    validator,
    collectionIdValidator,
  ],
  getImage
);

module.exports = uploadRouter;
