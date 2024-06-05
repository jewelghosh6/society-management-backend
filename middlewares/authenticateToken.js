const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  //console.log(token);

  if (token == null || authHeader == null) {
    res.status(401).send({ success: false, message: "unauthenticated" });
  }
  else {
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        res.status(403).send({ message: "unauthorized to get the resource Error: " + err });
      }
      else {
        req.user = user;
        console.log("withIn jwt Verify method:");
        console.log(user);
        next();
      }
    });
  }
};

module.exports = authenticateUser;
