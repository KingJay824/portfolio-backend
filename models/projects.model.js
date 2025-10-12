import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completion: { type: Date },
  description: { type: String }
});

export default mongoose.model("Project", projectSchema);
