import mongoose from "mongoose";
export const Stitch = mongoose.model("stitches", {
    content: String,
    postedByUserId: String,
    createdAt: String,
    updatedAt: String
});