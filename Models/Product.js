const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  product: {
    type: String,
    required: [true, "product is required"],
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "status is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Caregorie",
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default:0
  },
});

module.exports = model("Product", ProductSchema);
