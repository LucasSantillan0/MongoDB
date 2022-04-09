const { Router } = require("express");
const { check } = require("express-validator");
const validator = require("../middlewares/validator");
const getCategories = require("../controllers/getCategories");
const createCategory = require("../controllers/createCategory");
const editCategory = require("../controllers/editCategory");
const deleteCategories = require("../controllers/deleteCategories");
const validateJSW = require("../middlewares/validateJSW");
const { existCategoryName } = require("../helpers/validators");
const getCategoryById = require("../controllers/getCategoryById");
const categoryIdValidator = require("../middlewares/categoryIdValidator");

const categoriesRouter = Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:id", [categoryIdValidator], getCategoryById);

//with token
categoriesRouter.post(
  "/",
  [
    validateJSW,
    check("category").notEmpty(),
    check("status").notEmpty(),
    check("category").custom(existCategoryName),
    validator,
  ],
  createCategory
);

categoriesRouter.put(
  "/:id",
  [validateJSW, categoryIdValidator, check("category").notEmpty(), validator],
  editCategory
);
categoriesRouter.delete(
  "/:id",
  [validateJSW, categoryIdValidator, validator],
  deleteCategories
);

module.exports = categoriesRouter;
