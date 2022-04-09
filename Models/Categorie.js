const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  category: {
    type: String,
    required: [true, "category is required"],
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "status is required"],
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true,
  }
});

module.exports = model("Category", categorySchema);
