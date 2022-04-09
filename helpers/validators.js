const Categorie = require("../Models/Categorie");
const Role = require("../Models/Role");
const User = require("../Models/User");

const roleValidator = async (role) => {
  const avialableRole = await Role.findOne({ role });
  if (!avialableRole) throw new Error("That role does not exist");
};
const emailValidator = async (email) => {
  const emailError = await User.findOne({ email });
  if (emailError) {
    throw new Error (`the mail ${email} already exist`) 
  }
};
const idValidator = async (id) => {
  const idError = await User.findById(id);
  if (!idError) {
    throw new Error (`the id "${id}" does not exist`) 
  }
};
const existCategoryName = async (category) => {
  const existentCategory = await Categorie.findOne({category:category.toUpperCase()});
  if (existentCategory) {
    throw new Error (`the category "${category}" already exist`) 
  }
};



module.exports = {
  idValidator,
  roleValidator,
  emailValidator,
  existCategoryName,
  
};
