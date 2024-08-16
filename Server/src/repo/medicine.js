// import { initializeFirebaseApp, getFirestoreDb } from "../db/config.js";
// import {
//   addDoc,
//   collection,
//   getDocs,
//   getDoc,
//   updateDoc,
//   doc,
//   where,
//   query,
//   deleteDoc,
// } from "firebase/firestore";

const addMedicine = async (medicine) => {
  try {
    
  } catch (error) {
    console.error("Error adding medicine:", error.message);
    throw error;
  }
};

const getMedicineById = async (medicineId) => {
  try {
   
  } catch (error) {
    console.error("Error fetching medicine:", error.message);
    throw error;
  }
};

const getAllMedicines = async () => {
 
};

const updateMedicine = async (id, updatedData) => {
 
};

const deleteMedicine = async (medicineId) => {
 
};

export default {
  addMedicine,
  getMedicineById,
  getAllMedicines,
  updateMedicine,
  deleteMedicine,
};
