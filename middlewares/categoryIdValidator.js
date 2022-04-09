const { request } = require("express");
const { response } = require("express");
const Categorie = require("../Models/Categorie");

const categoryIdValidator = async (req = request, res = response, next) => {
  const { id } = req.params;
  const category = await Categorie.findById(id);
  if (!category) {
    return res.status(400).json({
      error: "invalid id",
    });
  }
  req.category = category;
  next();
};
module.exports = categoryIdValidator;
