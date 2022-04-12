const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Categorie = require("../Models/Categorie");

const editCategory = async (req = request, res = response) => {
  const { id } = req.params;
  const { category } = req.body;
  const newCategory = await Categorie.findByIdAndUpdate(
    id,
    { category: category.toUpperCase() },
    { new: true }
  );
  await newCategory.populate('user')
  res.json(newCategory);
};

module.exports = routeHandler({ put: editCategory });
