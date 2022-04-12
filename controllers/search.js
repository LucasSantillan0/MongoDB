const { response } = require("express");
const { request } = require("express");
const Categorie = require("../Models/Categorie");
const Product = require("../Models/Product");
const Role = require("../Models/Role");
const User = require("../Models/User");

const collections = {
  categories: [Categorie, "category"],
  products: [Product, "product"],
  roles: [Role, "role"],
  users: [User, "name"],
};

const search = async (req = request, res = response) => {
  const { term, collection } = req.params;
  if (!collections[collection]) {
    return res.json({ error: `Collection ${collection} does not exist` });
  }
  const [model, query] = collections[collection];
  const result = await searchInCollection(model, query, term);
  res.send(result);
};

const searchInCollection = async (model, query, term) => {
  const regTerm = new RegExp (term,'i')
  const result = await model.find({ [query]: regTerm });
  return { result };
};

module.exports = {
  search,
};
