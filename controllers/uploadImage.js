const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const uploadFile = require("../helpers/uploadFile");

const uploadImage = async (req = request, res = response) => {
  const { image } = req.files;
  if (!image) {
    return res.status(400).json({ error: "no image" });
  }
  try {
    const path = await uploadFile(image, 'uploads/imgs');
    res.json({path});
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = routeHandler({ post: uploadImage });
