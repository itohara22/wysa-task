import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { SleepData } from "./models/sleepData.js";

const url = process.env.MONGO;
async function main() {
  // ADD MONGO DATABASE URL HERE
  await mongoose.connect(url);
}

main()
  .then(() => {
    console.log("connection open mongo");
  })
  .catch((err) => {
    console.log("mongo error", err);
  });

const sleepData = {};

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/1", (req, res) => {
  sleepData.affectPeriod = req.body.affectPeriod;
  res.json({ data: sleepData });
});

app.post("/2", (req, res) => {
  sleepData.bedIn = req.body.bedIn;
  res.json({ data: sleepData });
});

app.post("/3", (req, res) => {
  sleepData.bedOut = req.body.bedOut;
  res.json({ data: sleepData });
});

app.post("/4", async (req, res) => {
  sleepData.sleepTime = req.body.sleepTime;
  const data = new SleepData(sleepData);
  await data.save();
  res.json(data);
  // res.json(sleepData);
});

app.get("/result", (req, res) => {
  res.json({ score: 20 });
});

app.listen(3000, () => {
  console.log("serving on port 3000");
});
