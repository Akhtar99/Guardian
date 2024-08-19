import userServices from "../services/user.js";
async function createRecord(req, res) {
  try {
    console.log("adding new user");
    const { body } = req;
    const userRecord = await userServices.createRecord(body);
    return res.status(201).json(userRecord);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function userLogin(req, res) {
  try {
    const { body } = req;   
   const userRecord = await userServices.login(body);
    return res.status(200).json(userRecord);
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updatingUser(req, res) {
  try {
    const { user, body } = req;
    const userId = req.params.id;
    const userRecord = await userServices.updateRecord(body, user, userId);
    return res.status(userRecord.statusCode).json(userRecord);
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const userRecord = await userServices.getUserById(userId);
    return res.status(userRecord.statusCode).json(userRecord);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getAllUsers(req, res) {
  try {
    const userRecord = await userServices.getAllUsers();
    return res.status(userRecord.statusCode).json(userRecord);
  } catch (error) {
    console.error("Error fetching all users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    const { user } = req;
    const userRecord = await userServices.deleteUser(userId, user);
    return res.status(userRecord.statusCode).json(userRecord);
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteAllUser(req, res) {
  try {
    const { user } = req;
    const userRecord = await userServices.deleteAllUser(user);
    return res.status(userRecord.statusCode).json(userRecord);
  } catch (error) {
    console.error("Error deleting all users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  createRecord,
  userLogin,
  updatingUser,
  getAllUsers,
  getUserById,
  deleteUser,
  deleteAllUser,
};
