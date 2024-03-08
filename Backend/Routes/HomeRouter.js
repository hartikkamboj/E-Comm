const express = require("express");
const HomeRouter = express.Router();
const { userVerifier } = require("../middleWares/userVerifier");
const { users } = require("../dummyData");
const jwt = require("jsonwebtoken");
const {
  tokenExtracter,
  tokenVerifier,
} = require("../middleWares/TokenExtracter");
const secretkey = "30HA2002";

HomeRouter.post("/", userVerifier, (req, res) => {
  jwt.sign(req.body.email, secretkey, (err, token) => {
    res.send(token);
  });
});

HomeRouter.get("/verify", tokenExtracter, tokenVerifier, (req, res) => {
  const verifier = users.find((user) => req.token == user.email);
  if (verifier) {
    res.send("verified");
  } else {
    res.send("not verified");
  }
});
module.exports = { HomeRouter };
