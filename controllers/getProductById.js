const routeHandler = require("../helpers/routeHandler")

const getProductById = (req,res) => {
  res.json(req.product)
}
module.exports = routeHandler({get:getProductById})