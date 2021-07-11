import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ObjectID } from "mongodb";
import { Globals } from "./globals";
import { Stitch } from "./Models/Stitch";
import { User } from "./Models/User";

export const resolvers = {
  Query: {
    user: (_, { email }) => User.findOne({ email: email }),
    users: () => User.find(),
    stitch: (_, { id }) => Stitch.findById(ObjectID(id)),
    stitches: () => Stitch.find(),
  },
  Mutation: {
    createNewUser: async (_, { fName, lName, email, password }) => {
      const user = new User({ fName, lName, email, password });
      await user.save();
      return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("No user with that email");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      return jsonwebtoken.sign(
        {
          id: user.id,
          email: user.email,
        },
        Globals.JWT_SECRET,
        {
          expiresIn: "1y",
        }
      );
    },
    createNewStitch: async (_, { content, postedByUserId }) => {
      const stitch = new Stitch({ content, postedByUserId });
      await stitch.save();
      return stitch;
    },
  },
};
