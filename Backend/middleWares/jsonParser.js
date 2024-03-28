const jsonParser = (req, res, next) => {
  if (req.headers.data) {
    req.headers.data = JSON.parse(req.headers.data);
    next();
  } else {
    res.send("not appllicable");
  }
};

module.exports = { jsonParser };
