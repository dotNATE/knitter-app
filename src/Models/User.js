import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { Globals } from "../globals";

const UserSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stitches: [
    {
      type: Schema.Types.ObjectId,
      ref: "stitches",
    },
  ],
});

export const User = mongoose.model("users", UserSchema);
