const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.replace("Bearer ", "");

      const decoded = jwt.verify(token, "mySecretKey");

      req.user = await User.findById(decoded._id).select("-password");
    } catch (error) {
      return res.status(401).send({ message: "Not authorized" });
    }
  }

  if (!token) {
    return res.status(401).send({ message: "Not authorized" });
  }

  next();
};

module.exports = auth;
