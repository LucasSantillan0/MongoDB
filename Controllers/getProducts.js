const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Product = require("../Models/Product");

const getProducts = async (req=request, res=response) => {
  const {limit = 5, since = 0} = req.query
  const products = await Product.find({status:true}).limit(limit).skip(since).populate('user')
  
  res.json(products)
}

module.exports = routeHandler({get:getProducts})