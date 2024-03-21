const { users } = require("../dummyData");

const userVerifier = (req, res, next) => {
  const verifier = users.find(
    (user) => req.body.email == user.email && req.body.password == user.password
  );
  console.log();
  if (verifier) {
    next();
  } else {
    res.send("not allowed");
  }
};

module.exports = { userVerifier };
