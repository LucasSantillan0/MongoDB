const { response } = require("express");
const { request } = require("express");
const User = require("../Models/User");

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, {status:false}, {new:true})
  res.json(user)
};

module.exports = deleteUser;
