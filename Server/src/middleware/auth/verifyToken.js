import jwt from "jsonwebtoken"; // Change to require('jsonwebtoken')
// import { SECRET_KEY } = process.env;
const SECRET_KEY = "12giyje958";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";
  if (token === "") {
    return res.status(403).send({ message: "Token is required" });
  }
  try {
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    return next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: err.message });
    }

    return res.status(400).json({ message: "Something went wrong" });
  }
};
export default verifyToken // Change export syntax to module.exports
