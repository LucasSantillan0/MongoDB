const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Product = require("../Models/Product");

const createProduct = async (req = request, res = response) => {
  const { user } = req;
  const product = new Product({ ...req.body, user: user._id });
  await product.save();
  await product.populate("user");
  res.json(product)
};

module.exports = routeHandler({ post: createProduct });
