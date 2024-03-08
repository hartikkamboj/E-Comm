const jwt = require("jsonwebtoken");
const secretkey = "30HA2002";

const tokenExtracter = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  req["token"] = token;
  next();
};

const tokenVerifier = (req, res, next) => {
  jwt.verify(req.token, secretkey, (err, decoded) => {
    if (err) {
      res.send("not verifed");
    } else {
      req.token = decoded;
      next();
    }
  });
};

module.exports = { tokenExtracter, tokenVerifier };
