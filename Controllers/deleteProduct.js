const routeHandler = require("../helpers/routeHandler")

const deleteProduct = async (req,res) => {
  const {product} = req
  await product.updateOne({status:false}, {new:true})
  res.json(product)
}
module.exports = routeHandler({delete:deleteProduct})