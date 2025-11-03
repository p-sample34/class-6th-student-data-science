import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
  name: String,
  roll: String,
  subject: String,
  marks: Number,
  month: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Mark", markSchema);
