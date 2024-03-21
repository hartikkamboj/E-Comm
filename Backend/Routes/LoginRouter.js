const express = require("express");
const loginRouter = express.Router();
const { userVerifier } = require("../middleWares/userVerifier");
const { users, products } = require("../dummyData");
const jwt = require("jsonwebtoken");
const {
  tokenExtracter,
  tokenVerifier,
} = require("../middleWares/TokenExtracter");
const secretkey = "30HA2002";

loginRouter.post("/", userVerifier, (req, res) => {
  jwt.sign(req.body.email, secretkey, (err, token) => {
    res.send(token);
  });
});

loginRouter.get("/verify", tokenExtracter, tokenVerifier, (req, res) => {
  const verifier = users.find((user) => req.token == user.email);
  if (verifier) {
    res.send("verified");
  } else {
    res.send("not verified");
  }
});

loginRouter.get("/data", (req, res) => {
  res.json(products);
});
module.exports = { loginRouter };
