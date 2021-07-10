import { Stitch } from "../Models/Stitch";

export const getAllStitches = async (req, res) => {
    const stitches = await Stitch.find();
    res.send(stitches);
}