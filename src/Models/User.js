import mongoose from "mongoose";
export const User = mongoose.model("users", {
    fName: String,
    lName: String,
    email: String,
    password: String,
    emailVerifiedAt: String,
    createdAt: String,
    updatedAt: String
});