import express from "express";
import bodyParser from "body-parser";
import verifyToken  from "../middleware/auth/verifyToken.js";
import  verifyRole  from "../middleware/auth/auth.js";
// import {} from(''); // Add your additional imports here

// import Validators from "../middleware/Validators/index.js";

import userController from "../controller/user.js";

const userRouter = express.Router();

userRouter.post(
  "/",
  verifyToken,
  verifyRole,
  // Validators.SignupValidator,
  userController.createRecord
);
userRouter.post("/login", userController.userLogin);
userRouter.put(
  "/update/:id",
  verifyToken,
  verifyRole,
  userController.updatingUser
);
userRouter.get(
  "/get-user/:id",
  verifyToken,
  verifyRole,
  userController.getUserById
);
userRouter.get("/get-all", verifyToken, verifyRole, userController.getAllUsers);
userRouter.delete(
  "/delete/:id",
  verifyToken,
  verifyRole,
  userController.deleteUser
);
// userRouter.delete("/delete-all", verifyToken, userController.deleteAllUser);

export default { userRouter };
