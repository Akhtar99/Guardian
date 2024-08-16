
import User from "../db/models/index.js";

const createUser = async (obj) => {
  try {
   const user = User.create(obj);
    return user;
  } catch (error) {
    console.error("Error adding user:", error.message);
    throw error;
  }
};

const findUser = async (body) => {
  try {
   const user = await User.findOne(body);
    return user;
  } catch (error) {
    console.error("Error getting user:", error.message);
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
  

 
    return ;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    
    return ;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

const updateRecord = async (updatedData, userId) => {
  try {
    
    return { message: "Record updated successfully" };
  } catch (error) {
    console.error("Error updating medicine:", error.message);
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    
    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};

const deleteAllUser = async () => {
  try {
   
    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};

export default {
  createUser,
  getUserById,
  getAllUsers,
  findUser,
  updateRecord,
  deleteUser,
  deleteAllUser,
};
