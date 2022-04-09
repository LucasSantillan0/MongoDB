const { response } = require("express");
const { request } = require("express");

const routeHandler =
(handler) => async (req=request, res=response) => {
  const method = req.method.toLowerCase();

  // check handler supports HTTP method
  if (!handler[method])
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  try {
    // route handler
    await handler[method](req, res);
  } catch (err) {
    // global error handler
    errorHandler(err, res);
  }
};

const errorHandler = (err, res) => {
    if (typeof err === 'string') {
      const is404 = err.toLowerCase().endsWith('not found');
      const statusCode = is404 ? 404 : 400;
      return res.status(statusCode).json({ message: err });
    }
  
    if (err.name === 'UnauthorizedError') {
      // jwt authentication error
      return res.status(401).json({ message: 'Invalid Token' });
    }
    res.json('something went wrong')
  };

module.exports = routeHandler