const { response } = require("express");
const { request } = require("express");
const path = require("path");
const fs = require("fs");
const routeHandler = require("../helpers/routeHandler");
const uploadFile = require("../helpers/uploadFile");
const Product = require("../Models/Product");
const User = require("../Models/User");

const updateImage = async (req = request, res = response) => {
  const { instance } = req;
  const { image } = req.files;
  const { collection } = req.params;
  if (instance.image) {
    const imagePath = path.join(
      __dirname,
      "../uploads",
      collection,
      instance.image
    );
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  instance.image = await uploadFile(image, collection);
  await instance.save();
  res.json(instance);
};
module.exports = routeHandler({ put: updateImage });
