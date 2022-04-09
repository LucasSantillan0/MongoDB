const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Categorie = require("../Models/Categorie");

const deleteCategories = async (req = request, res = response) => {
  const { id } = req.params;
  const newCategory = await Categorie.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  res.json(newCategory);
};

module.exports = routeHandler({ delete: deleteCategories });
