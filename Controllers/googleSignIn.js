const { response } = require("express");
const { request } = require("express");
const generateToken = require("../helpers/generateToken");
const { googleVerify } = require("../helpers/googleVerify");
const User = require("../Models/User");

const googleSignIn = async (req = request, res = response) => {
  const { id_token } = req.body;
  try {
    const googleUser = await googleVerify(id_token);
    let user = await User.findOne({ email: googleUser.email });
    if (!user) {
      user = new User({
        ...googleUser,
        google: true,
        role: "USER",
        password: "pitita",
      });
      await user.save();
    }
    if(!user.status){
        res.status(401).json({
            msg:'user is deactivated'
        })
    }
    const token = await generateToken(user.id)
    res.status(200).json({user,token});
  } catch (e) {
    res.status(401).json({
      msg: e,
    });
  }
};

module.exports = googleSignIn;
