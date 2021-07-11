import mongoose from "mongoose";

const StitchSchema = new mongoose.Schema({
  content: String,
  postedByUserId: String,
});

export const Stitch = mongoose.model("stitches", StitchSchema);
