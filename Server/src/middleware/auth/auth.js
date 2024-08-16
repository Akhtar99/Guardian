import jwt from "jsonwebtoken"; // Change to require('jsonwebtoken')
const { SECRET_KEY } = process.env;

const verifyRole = (req, res, next) => {
  try {
    const { user } = req;
    if (!user.role || user.role !== "superAdmin") {
      return res.status(401).json({ message: "unauthorized" });
    }
    return next();
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
export default verifyRole;
