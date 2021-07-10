import { User } from "../Models/User";

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
}