const { response } = require("express");
const { request } = require("express");
const Product = require("../Models/Product");

const productIdValidator = async (req = request, res = response, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.json({ error: "product does not exist" });
  }
  req.product = product;
  next();
};

module.exports = productIdValidator;
