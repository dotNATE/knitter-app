import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Globals } from "../globals";

const UserSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  password: String,
  stitches: Array,
});

UserSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(user.password, Globals.saltRounds, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  }
});

export const User = mongoose.model("users", UserSchema);
