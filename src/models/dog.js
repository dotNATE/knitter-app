import mongoose from "mongoose";
export const Dog = mongoose.model("dogs", { name: String });