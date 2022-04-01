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
module.exports = {
  roleValidator,
  emailValidator
};
