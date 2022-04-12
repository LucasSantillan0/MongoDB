const { Router } = require("express");
const { check } = require("express-validator");
const createProduct = require("../controllers/createProduct");
const deleteProduct = require("../controllers/deleteProduct");
const editProduct = require("../controllers/editProduct");
const getProductById = require("../controllers/getProductById");
const getProducts = require("../controllers/getProducts");
const productIdValidator = require("../middlewares/productIdValidator");
const experimentalRoleValidator = require("../middlewares/roleValidator");
const validateJSW = require("../middlewares/validateJSW");
const validator = require("../middlewares/validator");

const productRouter = Router();

productRouter.post(
  "/",
  [
    validateJSW,
    experimentalRoleValidator("ADMIN"),
    check("product", "product is required").notEmpty(),
    validator,
  ],
  createProduct
);
productRouter.get(
  "/",
  [
    validateJSW,
  ],
  getProducts
);
productRouter.put (
  '/:id',
  [
    validateJSW,
    productIdValidator
  ],
  editProduct
)
productRouter.get(
  '/:id',
  [
    validateJSW,
    productIdValidator
  ],
  getProductById
)
productRouter.delete(
  '/:id',
  [
    validateJSW,
    productIdValidator
  ],
  deleteProduct
)
module.exports = productRouter;
