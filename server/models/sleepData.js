import { Schema, model } from "mongoose";

const SleepDataSchema = new Schema({
  affectPeriod: Number,
  bedIn: Number,
  bedOut: Number,
  sleepTime: Number
});

export const SleepData = model("SleepData", SleepDataSchema);
