const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Categorie = require("../Models/Categorie");

const getCategoryById = async (req = request, res = response) => {
  const { category } = req;
  await category.populate("user");
  res.json(category);
};

module.exports = routeHandler({ get: getCategoryById });
