const express = require("express");
const cors = require("cors");
const { PORT } = require("../config");
const userRouter = require("../Routes/user");
const dbConection = require("../DB/db");
const morgan = require("morgan");
const loginRouter = require("../Routes/login");
const categoriesRouter = require("../Routes/categories");
const productRouter = require("../Routes/products");
const searchRouter = require("../Routes/search");

module.exports = class Server {
  paths = {
    user:'/api/user',
    login:'/api/login',
    categories:'/api/categories',
    products:'/api/products',
    search:'/api/search'
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
    this.server.use(morgan('tiny'))
    this.server.use(express.static('public'))
  }
  routes() {
    this.server.use(this.paths.user, userRouter);
    this.server.use(this.paths.login, loginRouter);
    this.server.use(this.paths.categories,categoriesRouter)
    this.server.use(this.paths.products,productRouter)
    this.server.use(this.paths.search,searchRouter)

  }
  async dataBase() {
    await dbConection();
  }
};
