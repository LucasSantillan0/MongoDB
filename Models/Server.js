const express = require("express");
const cors = require("cors");
const { PORT } = require("../config");
const userRouter = require("../Routes/user");
const dbConection = require("../DB/db");
const morgan = require("morgan");
const loginRouter = require("../Routes/login");

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
    this.server.use("/user", userRouter);
    this.server.use("/login", loginRouter);

  }
  async dataBase() {
    await dbConection();
  }
};
