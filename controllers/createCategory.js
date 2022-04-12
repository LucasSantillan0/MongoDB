const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const Categorie = require("../Models/Categorie");

const createCategory = async (req=request, res=response) => {
    const {category, status} = req.body;
    const newCategory = new Categorie({category:category.toUpperCase(),status,user:req.user._id})
    await newCategory.save()
    await newCategory.populate('user')
    res.json(newCategory)
}

module.exports = routeHandler({post:createCategory})