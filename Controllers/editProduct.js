const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");

const editProduct = async (req = request, res = response) => {
  await req.product.updateOne({...req.body, user:req.user._id},{new:true}).populate("user");
  res.json(req.product)
};
module.exports = routeHandler({put:editProduct})