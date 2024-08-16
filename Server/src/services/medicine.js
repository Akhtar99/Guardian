import medicineRepo from "../repo/medicine.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_KEY = "12giyje958";
// import { SECRET_KEY } = process.env;

async function addMedicine(body) {
  const medicine = await medicineRepo.addMedicine(body);
  let response = {
    message: "record created successfully",
    statusCode: 201,
    data: medicine.medicine,
  };
  return response;
}

async function getMedicineById(medicineId) {
  let medicine = await medicineRepo.getMedicineById(medicineId);
  if (medicine === null) {
    return {
      message: "record not found",
      statusCode: 404,
    };
  }
  return {
    data: medicine,
    message: "Record fetched successfully",
    statusCode: 200,
  };
}

async function getAllMedicines(body) {
  let medicine = await medicineRepo.getAllMedicines(body);
  if (medicine == null) {
    return {
      data: medicine,
      message: "record not found",
      statusCode: 404,
    };
    // return response;
  } else {
    medicine = medicine.map((medicine) => {
      const { password, ...medicineWithoutPassword } = medicine;
      return medicineWithoutPassword;
    });
    return {
      message: "Record fetched successfully",
      statusCode: 200,
      data: medicine,
    };
  }
}

async function updateMedicine(medicineId, body) {
  const isExist = await medicineRepo.getMedicineById(medicineId);
  if (!isExist) {
    return {
      message: "record not found",
      statusCode: 404,
    };
  }
  let medicine = await medicineRepo.updateMedicine(medicineId, body);
  const response = {
    message: "Records fetched successfully",
    data: medicine.updatedMedicine,
    statusCode: 201,
  };
  return response;
}

async function deleteMedicine(medicineId) {
  let medicine = await medicineRepo.deleteMedicine(medicineId);
  let response = {};
  if (medicine == null) {
    console.log("the is null medicine");
    response = {
      message: "Record not found",
      statusCode: 404,
    };
  } else {
    response = {
      message: "Record deleted successfully",
      statusCode: 200,
    };
  }
  return response;
}

export default {
  addMedicine,
  getMedicineById,
  getAllMedicines,
  updateMedicine,
  deleteMedicine,
};
