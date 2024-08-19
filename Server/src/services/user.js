import userRepo from "../repo/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_KEY = "12giyje958";
// import { SECRET_KEY } = process.env;

async function createRecord(body) {
  // const isExist = await userRepo.findUser(body);
  // if (isExist) {
  //   return {
  //     statusCode: 409,
  //     message: "conflict",
  //     success: false,
  //   };
  // }

  body.password = await bcrypt.hash(body.password, 10);
  body.role = "user";
  const user = await userRepo.createUser(body);
  return {
    user,
    message: "record created successfully",
    statusCode: 201,
  };
}

async function login(body) {
  let user = await userRepo.findUser(body);
  if (user == null) {
    return {
      message: "record not found",
      statusCode: 404,
      success : false,
    };
  }
  body.id = user.id;
  body.role = user.role;
  const camparePassword = bcrypt.compare(body.password, user.password);
  if (camparePassword) {
    const tokenData = await jwt.sign(body, SECRET_KEY);
    return {
      statusCode: 201,
      user,
      token: tokenData,
      success : true,
    };
  }
  return {
    statusCode: 403,
    message: "forbidden",
  };
}

async function getUserById(userId) {
  let user = await userRepo.getUserById(userId);
  if (user === null) {
    return {
      message: "record not found",
      statusCode: 404,
    };
  }
  return {
    message: "Record fetched successfully",
    statusCode: 200,
    user,
  };
}

async function getAllUsers(body) {
  let user = await userRepo.getAllUsers(body);
  if (user == null) {
    return {
      message: "record not found",
      statusCode: 404,
    };
  } else {
    user = user.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    return {
      message: "Record fetched successfully",
      statusCode: 200,
      data: user,
    };
  }
}

async function updateRecord(body, user, userId) {
  if (!(user && (user.id === userId || (user.role && user.role === "admin")))) {
    return {
      success: false,
      statusCode: 401,
      message: "unauthorized",
    };
  }
  const isExist = await userRepo.getUserById(userId);
  if (!isExist) {
    return {
      success: false,
      message: "Record not found",
    };
  }
  let userRecord = await userRepo.updateRecord(body, userId);
  return {
    userRecord,
    statusCode: 201,
  };
}

async function deleteUser(userId, user) {
  let userRecord = await userRepo.deleteUser(userId);
  if (userRecord === null) {
    return {
      message: "Record not found",
      statusCode: 404,
    };
  } else {
    return {
      message: "Record deleted successfully",
      statusCode: 200,
    };
  }
}

async function deleteAllUser(user) {
  if (!user || !user.role || user.role !== "admin") {
    return {
      success: false,
      statusCode: 401,
      message: "unauthorized",
    };
  }
  let users = await userRepo.deleteAllUser();
  if (users == null) {
    return {
      message: "Record not found",
      statusCode: 404,
    };
  } else {
    return {
      message: "Records deleted successfully",
      statusCode: 200,
    };
  }
}

export default {
  createRecord,
  getUserById,
  getAllUsers,
  updateRecord,
  deleteUser,
  login,
  deleteAllUser,
};
