import { Dog } from "../models/Dog";

export const getAllDogs = async (req, res) => {
    const dogs = await Dog.find();
    return res.send({ data: dogs });
}