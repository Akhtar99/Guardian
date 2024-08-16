// https://us-central1-guardian-ce666.cloudfunctions.net/app

import express from "express";
import http from "http"; // Require http module
import bodyParser from "body-parser";
import { config } from "dotenv";
import admin from "firebase-admin";
import cors from "cors";

import userRouter  from "./src/router/user.js";
import  medicineRouter from "./src/router/medicine.js";

import { Server } from 'socket.io';

config();
const PORT = 4600;
const app = express();
const server = http.createServer(app);

const io = new Server(server);


app.use(bodyParser.json());
app.use(cors("*"));

app.use("/user", userRouter);
app.use("/medicine", medicineRouter);
app.use("/guage", sensorRouter);

server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

// exports.app = functions.https.onRequest(app);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://guardian-ce666-3b4cb.asia-southeast1.firebasedatabase.app/",
});

const db = admin.database();
const dataRef = db.ref("UsersData");
io.on("connection", (socket) => {
  console.log("New client connected");
});

const onValueChanged = async (snapshot) => {
  const data = snapshot.val();
  socketEventss(data);
};

const socketEventss = (data) => {
  console.log(
    "data is ",
    data,
    typeof data.f2kQzGErtFZtE0DVGM7DMr6no2P2.SensorData.Temp
  );
  io.emit("realDbUpdated", data);
  console.log("an event emited");

  if (data) {
    if (data.f2kQzGErtFZtE0DVGM7DMr6no2P2.SensorData.Temp > 20) {
      tempNum = parseInt(data.f2kQzGErtFZtE0DVGM7DMr6no2P2.SensorData.Temp);
      if (tempNum >= 30) {
        io.emit("highTemp", { alert: "Increasing Temp", Temperaute: tempNum });
      }
    }
  }
};

dataRef.on("value", onValueChanged);
