import express from "express";
import bodyParser from "body-parser";

import  verifyToken from "../middleware/auth/verifyToken.js";
import  verifyRole  from "../middleware/auth/auth.js";
// import { addMedicineValid } from "../middleware/Validators/index.js";

import medicineController from "../controller/medicine.js";

const medicineRouter = express.Router();

medicineRouter.post(
  "/",
  verifyToken,
  verifyRole,
  // addMedicineValid,
  medicineController.addMedicine
);
medicineRouter.get("/get-by-id/:id", medicineController.getById);
medicineRouter.get("/get-all", medicineController.getAll);
medicineRouter.put(
  "/:id",
  verifyToken,
  verifyRole,
  medicineController.updateMedicine
);
medicineRouter.delete(
  "/:id",
  verifyToken,
  verifyRole,
  medicineController.deleteMedicine
);

export default { medicineRouter };
