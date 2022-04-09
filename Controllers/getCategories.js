const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Categorie = require("../Models/Categorie");

const getCategories = async (req = request, res = response) => {
    const categories = await Categorie.find();
    res.json(categories)
};

module.exports = routeHandler({ get: getCategories });
