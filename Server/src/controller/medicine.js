import medicineServices from "../services/medicine.js";

async function addMedicine(req, res) {
   const { body } = req;
  const medicine = await medicineServices.addMedicine(body);
  return res.status(201).json(medicine);
}

async function getById(req, res) {
  const medicineId = req.params.id;
  const medicine = await medicineServices.getMedicineById(medicineId);
  return res.status(medicine.statusCode).json(medicine);
}

async function getAll(req, res) {
  const medicine = await medicineServices.getAllMedicines();
  return res.status(medicine.statusCode).json(medicine);
}

async function updateMedicine(req, res) {
  const medicineId = req.params.id;
  const { body } = req;
  const medicine = await medicineServices.updateMedicine(medicineId, body);
  return res.status(medicine.statusCode).json(medicine);
}

async function deleteMedicine(req, res) {
  const medicineId = req.params.id;
  const medicine = await medicineServices.deleteMedicine(medicineId);
  return res.status(medicine.statusCode).json(medicine);
}

export default{
  addMedicine,
  getById,
  getAll,
  updateMedicine,
  deleteMedicine,
};
