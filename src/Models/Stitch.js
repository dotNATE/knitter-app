import mongoose, { Schema } from "mongoose";

const StitchSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  postedByUserId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export const Stitch = mongoose.model("stitches", StitchSchema);
