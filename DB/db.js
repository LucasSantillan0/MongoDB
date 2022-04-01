const mongoose = require("mongoose");
const { MONGODB_CNN } = require("../config");

const dbConection = async () => {
  try {
    await mongoose.connect(MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase connected");
  } catch (error) {
    throw new Error(`Error rising database: ${error}`);
  }
};

module.exports = dbConection;
