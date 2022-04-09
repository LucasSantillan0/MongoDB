const express = require("express");
const cors = require("cors");
const { PORT } = require("../config");
const userRouter = require("../Routes/user");
const dbConection = require("../DB/db");
const morgan = require("morgan");
const loginRouter = require("../Routes/login");
const categoriesRouter = require("../Routes/categories");

module.exports = class Server {
  paths = {
    user:'/api/user',
    login:'/api/login',
    categories:'/api/categories'
  }
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
    this.server.use(morgan("tiny"));
    this.server.use(express.static("public"));
  }
  routes() {
    this.server.use(this.paths.user, userRouter);
    this.server.use(this.paths.login, loginRouter);
    this.server.use(this.paths.categories, categoriesRouter);
  }
  async dataBase() {
    await dbConection();
  }
};
