const { response } = require("express");
const { request } = require("express");
const routeHandler = require("../helpers/routeHandler");
const path = require("path");

const getImage = (req = request, res = response) => {
  const { collection } = req.params;
  const { instance } = req;
  if (!instance.image) {
    return res.json({ error: "no file" });
  }
  const imagePath = path.join(
    __dirname,
    "../uploads",
    collection,
    instance.image
  );
  res.sendFile(imagePath);
};

module.exports = routeHandler({ get: getImage });
