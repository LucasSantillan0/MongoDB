const jwt = require("jsonwebtoken");

const generateToken = (uuid = " ") => {
  return new Promise((resolve, reject) => {
    const payload = { uuid };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "8h",
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports=generateToken
