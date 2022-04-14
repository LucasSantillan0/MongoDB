const { request } = require("express");
const Product = require("../Models/Product");
const User = require("../Models/User");

const collections = {
  users: User,
  products: Product,
};

const collectionIdValidator = async (req = request, res, next) => {
  const { id, collection } = req.params;
  const instance = await collections[collection].findById(id);
  if (!instance) {
    return res.json({
      error: "instance does not exist",
    });
  }
  req.collection = collection;
  req.instance = instance;
  next();
};
module.exports = collectionIdValidator;
