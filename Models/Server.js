const express = require("express");
const cors = require("cors");
const { PORT } = require("../config");
const router = require("../Routes/index");
const dbConection = require("../DB/db");
const morgan = require("morgan");

module.exports = class Server {
  constructor() {
    this.server = express();
    this.server.listen(PORT, () =>
      console.log(`Server listening on port ${PORT}`)
    );
    this.middlewares();
    this.routes();
    this.dataBase();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('tiny'))
  }
  routes() {
    this.server.use("/", router);
  }
  async dataBase() {
    await dbConection();
  }
};
